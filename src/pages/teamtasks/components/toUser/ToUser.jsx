import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUserTasks } from "../../../../graphql/queries";

function ToUser({ taskid }) {
  const [task, setTasks] = useState([]);

  // fetches task to determine user name
  function updateTasks() {
    try {
      const fetchTasks = async () => {
        const userTaskData = await API.graphql(
          graphqlOperation(listUserTasks, {
            filter: {
              taskID: {
                eq: taskid,
              },
            },
          })
        );
        console.log("fetching user task - to");
        const userTask = userTaskData.data.listUserTasks.items;

        return userTask;
      };
      fetchTasks().then((userTask) => setTasks(userTask));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    updateTasks();
  }, []);

  return <>{task.length !== 0 && <div>{task[0].user.name}</div>}</>;
}

export default ToUser;
