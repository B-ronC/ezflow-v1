import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateTask } from "../../../../graphql/mutations";
import FromUser from "../fromUser/FromUser";
import updateAllTasks from "../../../../functions/updateAllTasks";

function MyWaitingTasks({
  myWaitingTasks,
  user,
  currTeamID,
  setActiveTasks,
  setWaitingTasks,
  setCreatedTasks,
}) {
  // changes task status to active
  const updateTaskStatus = async (task) => {
    try {
      await API.graphql(
        graphqlOperation(updateTask, {
          input: {
            id: task.task.id,
            status: 1,
          },
        })
      );
      console.log("starting task - my tasks");

      updateAllTasks(
        user,
        currTeamID,
        setActiveTasks,
        setWaitingTasks,
        setCreatedTasks
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {myWaitingTasks
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
            <button onClick={() => updateTaskStatus(task)}>Start</button>
          </div>
        ))}
    </div>
  );
}

export default MyWaitingTasks;
