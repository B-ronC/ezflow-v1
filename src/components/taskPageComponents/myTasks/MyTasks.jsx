import React from 'react';
import FromUser from '../../taskPageComponents/fromUser/FromUser';

function MyTasks({ myTasks }) {
  return (
    <div>
        {myTasks.sort((a, b) => {
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
            <div key={task.task.id} className='task'>
              
              <h4>From:</h4>
              <div>
                <FromUser userid={ task.task.from } />
              </div>
              <h4>Title:</h4>
              <div>
                {task.task.title}
              </div>
              <h4>Description:</h4>
              <div>
                {task.task.description}
              </div>
              <button>Start</button>
            </div>
          ))
        }
    </div>
  )
}

export default MyTasks