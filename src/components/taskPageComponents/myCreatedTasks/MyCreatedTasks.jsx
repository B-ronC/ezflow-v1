import React from 'react';
import ToUser from '../../taskPageComponents/toUser/ToUser';

function MyCreatedTasks({ myCreatedTasks }) {
  return (
    <div>
        {myCreatedTasks.sort((a, b) => {
          let fa = a.createdAt.toLowerCase(),
              fb = b.createdAt.toLowerCase();

          if (fa < fb) {
              return -1;
          }
          if (fa > fb) {
              return 1;
          }
          return 0;
          }).map((task) => (
            <div key={task.id} className='task'>
              <h4>To:</h4>
              <ToUser taskid={ task.id } />
              <h4>Title:</h4>
              <div>
                {task.title}
              </div>
              <h4>Description:</h4>
              <div>
                {task.description}
              </div>
              <h4>Status:</h4>
                {task.status === 1 && <p>in progress</p>}
                {task.status === 0 && <p>waiting</p>}
            </div>
          ))
        }
    </div>
  )
}

export default MyCreatedTasks