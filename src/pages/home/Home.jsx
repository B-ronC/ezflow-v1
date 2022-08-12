import './home.css';
import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listTasks } from '../../graphql/queries';

import { withAuthenticator } from '@aws-amplify/ui-react';

function Topbar({ user }) {
  const [totalActiveTasks, setTotalActiveTasks] = useState([])
  const [totalWaitingTasks, setTotalWaitingTasks] = useState([])
  const [totalCreatedTasks, setTotalCreatedTasks] = useState([])

  const updateTasks = () => {
    const fetchTasks = async () => {
      const taskData = await API.graphql(graphqlOperation(listTasks))
      console.log('fetching tasks - home')
      const taskList = taskData.data.listTasks.items
  
      return taskList
    }
    fetchTasks().then(taskList => {
      setTotalActiveTasks(taskList.filter((task => {
        return task.toID === user.attributes.sub && task.status === 1
      })))

      setTotalWaitingTasks(taskList.filter((task => {
        return task.toID === user.attributes.sub && task.status === 0
      })))

      setTotalCreatedTasks(taskList.filter((task => {
        return task.from === user.attributes.sub 
      })))
    })
  }

  useEffect(() => {
    updateTasks()
  }, [])

  return (
    <div className='home'>
      <h2>Total Active Tasks:</h2>
      <h4>{totalActiveTasks.length}</h4>
      <h2>Total Waiting Tasks:</h2>
      <h4>{totalWaitingTasks.length}</h4>
      <h2>Total Created Tasks:</h2>
      <h4>{totalCreatedTasks.length}</h4>
    </div>
  )
}

export default withAuthenticator(Topbar) 
