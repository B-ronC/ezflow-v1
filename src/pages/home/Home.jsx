import "./home.css";
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTasks } from "../../graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";

import Taskcount from "./components/taskcount/Taskcount";

function Topbar({ user }) {
  const [totalActiveTasks, setTotalActiveTasks] = useState([]);
  const [totalWaitingTasks, setTotalWaitingTasks] = useState([]);
  const [totalCreatedTasks, setTotalCreatedTasks] = useState([]);

  // fetches all user's tasks and sets active, waiting, created task states
  const updateTasks = () => {
    const fetchTasks = async () => {
      const taskData = await API.graphql(graphqlOperation(listTasks));
      console.log("fetching tasks - home");
      const taskList = taskData.data.listTasks.items;

      return taskList;
    };
    fetchTasks()
      .then((taskList) => {
        setTotalActiveTasks(
          taskList.filter((task) => {
            return task.toID === user.attributes.sub && task.status === 1;
          })
        );

        setTotalWaitingTasks(
          taskList.filter((task) => {
            return task.toID === user.attributes.sub && task.status === 0;
          })
        );

        setTotalCreatedTasks(
          taskList.filter((task) => {
            return task.from === user.attributes.sub;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // updates user's tasks on render
  useEffect(() => {
    updateTasks();
  }, []);

  return (
    <div className="home">
      <div className="homeContainer">
        <ul>
          <li>
            <Taskcount
              taskType={"Total Active Tasks:"}
              count={totalActiveTasks.length}
            />
          </li>
          <li>
            <Taskcount
              taskType={"Total Waiting Tasks:"}
              count={totalWaitingTasks.length}
            />
          </li>
          <li>
            <Taskcount
              taskType={"Total Created Tasks:"}
              count={totalCreatedTasks.length}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withAuthenticator(Topbar);
