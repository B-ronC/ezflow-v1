import "./home.css";
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTasks } from "../../graphql/queries";

import { withAuthenticator } from "@aws-amplify/ui-react";

function Topbar({ user }) {
  const [totalActiveTasks, setTotalActiveTasks] = useState([]);
  const [totalWaitingTasks, setTotalWaitingTasks] = useState([]);
  const [totalCreatedTasks, setTotalCreatedTasks] = useState([]);

  const updateTasks = () => {
    const fetchTasks = async () => {
      const taskData = await API.graphql(graphqlOperation(listTasks));
      console.log("fetching tasks - home");
      const taskList = taskData.data.listTasks.items;

      return taskList;
    };
    fetchTasks().then((taskList) => {
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
    });
  };

  useEffect(() => {
    updateTasks();
  }, []);

  return (
    <div className="home">
      <div className="homeContainer">
        <ul>
          <div className="count">
            <h1>Total Active Tasks:</h1>
            <h2>{totalActiveTasks.length}</h2>
          </div>
          <div className="count">
            <h1>Total Waiting Tasks:</h1>
            <h2>{totalWaitingTasks.length}</h2>
          </div>
          <div className="count">
            <h1>Total Created Tasks:</h1>
            <h2>{totalCreatedTasks.length}</h2>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default withAuthenticator(Topbar);
