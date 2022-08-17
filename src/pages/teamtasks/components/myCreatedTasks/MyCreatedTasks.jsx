import React from "react";
import ToUser from "../toUser/ToUser";

function MyCreatedTasks({ myCreatedTasks }) {
  return (
    <div>
      {myCreatedTasks
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
          <div key={task.id} className="task">
            <div className="title">
              <h4>Title:</h4>
              <div>{task.title}</div>
            </div>
            <div className="to">
              <h4>To:</h4>
              <ToUser taskid={task.id} />
            </div>
            <h4>Description:</h4>
            <div className="desc">{task.description}</div>
            <div className="stat">
              <h4>Status:</h4>
              <div>
                {task.status === 1 && <p>in progress</p>}
                {task.status === 0 && <p>waiting</p>}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MyCreatedTasks;
