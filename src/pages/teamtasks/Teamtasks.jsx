import "./teamtasks.css";
import React, { useState, useEffect } from "react";

import Teamnavbar from "../../components/teamnavbar/Teamnavbar";
import MyActiveTasks from "./components/myActiveTasks/MyActiveTasks";
import MyTasks from "./components/myTasks/MyTasks";
import MyCreatedTasks from "./components/myCreatedTasks/MyCreatedTasks";

import { useParams } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { listUserTasks, listTasks } from "../../graphql/queries";

export const teamIDContextTask = React.createContext();

function Teamtasks({ user }) {
  const { currTeamID } = useParams();

  const [activeTasks, setActiveTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [createdTasks, setCreatedTasks] = useState([]);

  // updates task list
  function updateTasks() {
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
        console.log("fetching my assigned tasks - tasks");
        const userTaskList = userTaskData.data.listUserTasks.items;

        return userTaskList;
      };
      fetchTasks().then((userTaskList) => {
        setTasks(
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
  }

  // updates my created task list
  function updateCreatedTasks() {
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
        console.log("fetching my created tasks - tasks");
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
  }

  useEffect(() => {
    updateTasks();
    updateCreatedTasks();
  }, [currTeamID]);

  return (
    <div className="Teamtasks">
      <Teamnavbar currTeamID={currTeamID} />
      <div>
        <h2>My Active Tasks:</h2>
        <MyActiveTasks myActiveTasks={activeTasks} />
      </div>
      <div>
        <h2>My Waiting Tasks:</h2>
        <MyTasks myTasks={tasks} />
      </div>
      <div>
        <h2>My Created Tasks:</h2>
        <MyCreatedTasks myCreatedTasks={createdTasks} />
      </div>
    </div>
  );
}

export default withAuthenticator(Teamtasks);
