import "./teamtasks.css";
import React, { useState, useEffect } from "react";

import Teamnavbar from "../../components/teamnavbar/Teamnavbar";
import MyActiveTasks from "./components/myActiveTasks/MyActiveTasks";
import MyWaitingTasks from "./components/myWaitingTasks/MyWaitingTasks";
import MyCreatedTasks from "./components/myCreatedTasks/MyCreatedTasks";

import { useParams } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { listUserTasks, listTasks } from "../../graphql/queries";

function Teamtasks({ user }) {
  const { currTeamID } = useParams();

  const [activeTasks, setActiveTasks] = useState([]);
  const [waitingTasks, setWaitingTasks] = useState([]);
  const [createdTasks, setCreatedTasks] = useState([]);

  // updates active and waiting task lists
  const updateTasks = () => {
    try {
      const fetchTasks = async () => {
        const userTaskData = await API.graphql(
          graphqlOperation(listUserTasks, {
            filter: {
              userID: {
                eq: user.attributes.sub,
              },
            },
          })
        );
        console.log("fetching assigned tasks - tasks");
        const userTaskList = userTaskData.data.listUserTasks.items;

        return userTaskList;
      };
      fetchTasks().then((userTaskList) => {
        setWaitingTasks(
          userTaskList.filter((value) => {
            return value.task.teamID === currTeamID && value.task.status === 0;
          })
        );
        setActiveTasks(
          userTaskList.filter((value) => {
            return value.task.teamID === currTeamID && value.task.status === 1;
          })
        );
      });
    } catch (err) {
      console.error(err);
    }
  };

  // updates created task list
  const updateCreatedTasks = () => {
    try {
      const fetchCreatedTasks = async () => {
        const taskData = await API.graphql(
          graphqlOperation(listTasks, {
            filter: {
              from: {
                eq: user.attributes.sub,
              },
            },
          })
        );
        console.log("fetching created tasks - tasks");
        const taskList = taskData.data.listTasks.items;

        return taskList;
      };
      fetchCreatedTasks().then((taskList) =>
        setCreatedTasks(
          taskList.filter((value) => {
            return value.teamID === currTeamID;
          })
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  // updates task lists on render
  useEffect(() => {
    updateTasks();
    updateCreatedTasks();
  }, [currTeamID]);

  return (
    <div className="Teamtasks">
      <Teamnavbar currTeamID={currTeamID} />
      <div className="taskWrapper">
        <div className="taskBox">
          <h2>My Active Tasks:</h2>
          <MyActiveTasks myActiveTasks={activeTasks} />
        </div>
        <div className="taskBox">
          <h2>My Waiting Tasks:</h2>
          <MyWaitingTasks myWaitingTasks={waitingTasks} />
        </div>
        <div className="taskBox">
          <h2>My Created Tasks:</h2>
          <MyCreatedTasks myCreatedTasks={createdTasks} />
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Teamtasks);
