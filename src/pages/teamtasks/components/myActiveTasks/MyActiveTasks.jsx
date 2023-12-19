import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUserTasks } from "../../../../graphql/queries";
import { deleteUserTasks, deleteTask } from "../../../../graphql/mutations";
import FromUser from "../fromUser/FromUser";

import { root } from "../../../..";
import App from "../../../../App";
import { BrowserRouter } from "react-router-dom";

function MyActiveTasks({ myActiveTasks }) {
  // deletes task
  const finishTask = async (task) => {
    try {
      const userTaskData = await API.graphql(graphqlOperation(listUserTasks));
      console.log("fetching user task to finish task - active tasks");
      const userTaskList = userTaskData.data.listUserTasks.items.filter(
        (userTask) => {
          return userTask.task.id === task.task.id;
        }
      );

      await API.graphql(
        graphqlOperation(deleteUserTasks, {
          input: {
            id: userTaskList[0].id,
          },
        })
      );
      console.log("deleting user task - active tasks");

      await API.graphql(
        graphqlOperation(deleteTask, {
          input: {
            id: task.task.id,
          },
        })
      );
      console.log("finished task - active tasks");

      root.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {myActiveTasks
        .sort((a, b) => {
          let fa = a.createdAt.toLowerCase(),
            fb = b.createdAt.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        })
        .map((task) => (
          <div key={task.task.id} className="task">
            <div className="title">
              <h4>Title:</h4>
              <div>{task.task.title}</div>
            </div>
            <div className="to">
              <h4>From:</h4>
              <FromUser userid={task.task.from} />
            </div>
            <h4>Description:</h4>
            <div className="desc">{task.task.description}</div>
            <button onClick={() => finishTask(task)}>Finish</button>
          </div>
        ))}
    </div>
  );
}

export default MyActiveTasks;
