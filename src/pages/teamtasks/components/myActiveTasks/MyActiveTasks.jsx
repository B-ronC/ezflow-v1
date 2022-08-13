import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import FromUser from '../fromUser/FromUser';
import { listUserTasks } from '../../../../graphql/queries';
import { deleteUserTasks, deleteTask } from '../../../../graphql/mutations';

import { root } from '../../../..';
import App from '../../../../App';
import { BrowserRouter } from 'react-router-dom';

function MyActiveTasks({ myActiveTasks }) {
  return (
    <div>
        {myActiveTasks.sort((a, b) => {
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
              <button onClick={async () => {
                const userTaskData = await API.graphql(graphqlOperation(listUserTasks))
                console.log('fetching user tasks to finish task - active tasks')
                const userTaskList = userTaskData.data.listUserTasks.items.filter((userTask) => {
                  return userTask.task.id === task.task.id
                })

                const delUserTask = await API.graphql(graphqlOperation(deleteUserTasks, {
                  input: {
                    id: userTaskList[0].id
                  }
                }))
                console.log('deleting user task - active tasks')

                const deltask = await API.graphql(graphqlOperation(deleteTask, {
                  input: {
                    id: task.task.id
                  }
                }))
                console.log('deleting task - active tasks')

                root.render(
                  <BrowserRouter>
                      <App />
                  </BrowserRouter>
                ) 
              }}>Finish</button>
            </div>
          ))
        }
    </div>
  )
}

export default MyActiveTasks