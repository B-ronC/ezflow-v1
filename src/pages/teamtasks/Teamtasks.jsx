import './teamtasks.css';
import React, { useState } from 'react';
import Teamnavbar from '../../components/teamnavbar/Teamnavbar';
import FromUser from '../../components/fromUser/FromUser';
import ToUser from '../../components/toUser/ToUser';
import { useParams } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUserTasks, listTasks } from '../../graphql/queries';
import { useEffect } from 'react';


export const teamIDContextTask = React.createContext()

function Teamtasks({ user }) {
  const { currTeamID } = useParams()

  const [activeTasks, setActiveTasks] = useState([])
  const [tasks, setTasks] = useState([])
  const [createdTasks, setCreatedTasks] = useState([])

  // updates task list
  function updateTasks() {
    try {
        const fetchTasks = async () => {
            const userTaskData = await API.graphql(graphqlOperation(listUserTasks, {
                filter: {
                    userID: {
                        eq: user.attributes.sub
                    }
                }
            }))
            console.log('fetching my assigned tasks - tasks')
            const userTaskList = userTaskData.data.listUserTasks.items

            return userTaskList
        }
        fetchTasks().then(userTaskList => setTasks(userTaskList.filter((value) => {
          return value.task.teamID === currTeamID
        })))
    } catch (err) {
        console.error(err)
    }
  }

  // updates my created task list
  function updateCreatedTasks() {
    try {
        const fetchCreatedTasks = async () => {
            const taskData = await API.graphql(graphqlOperation(listTasks, {
                filter: {
                    from: {
                        eq: user.attributes.sub
                    }
                }
            }))
            console.log('fetching my created tasks - tasks')
            const taskList = taskData.data.listTasks.items

            return taskList
        }
        fetchCreatedTasks().then(taskList => setCreatedTasks(taskList.filter((value) => {
          return value.teamID === currTeamID
        })))
    } catch (err) {
        console.error(err)
    }
  }

  useEffect(() => {
    updateTasks()
    updateCreatedTasks()
  }, [])

  return (
    <div className='Teamtasks'>
      <teamIDContextTask.Provider value={ currTeamID }>
        <Teamnavbar />
      </teamIDContextTask.Provider>
      <div>
        <h2>My Active Tasks:</h2>
      </div>
      <div>
        <h2>My Tasks:</h2>
        {tasks.sort((a, b) => {
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
      <div>
        <h2>My Created Tasks:</h2>
        {createdTasks.sort((a, b) => {
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
    </div>
  )
}

export default withAuthenticator(Teamtasks)
