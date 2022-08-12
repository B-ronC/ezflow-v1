import './member.css'
import React, { useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUserTeams, listUserTasks, listTasks } from '../../../graphql/queries';
import { deleteUserTeams, deleteUserTasks, deleteTask } from '../../../graphql/mutations';

import TaskPopup from '../taskPopup/TaskPopup';

import { root } from '../../..';
import App from '../../../App';
import { BrowserRouter } from 'react-router-dom';

function Member({ user, member, owner, teamid }) {
  const [isOpen, setIsOpen] = useState(false)

  // delete all tasks connected to user
  const delUserTasks = async () => {
    const userTaskData = await API.graphql(graphqlOperation(listUserTasks))
    console.log('fetching user tasks to delete - settings')
    const userTaskList = userTaskData.data.listUserTasks.items.filter((userTask) => {
      return userTask.task.teamID === teamid && (userTask.userID === member.id || userTask.task.from === member.id)
    })

    for (let userTask of userTaskList) {
      const delUserTask = await API.graphql(graphqlOperation(deleteUserTasks, {
        input: {
          id: userTask.id
        }
      }))
      console.log('deleting user tasks - settings')
    }

    const taskData = await API.graphql(graphqlOperation(listTasks, {
      filter: {
        teamID: {
          eq: teamid
        }
      }
    }))
    console.log('fetching tasks to delete - settings')
    const taskList = taskData.data.listTasks.items.filter((task) => {
      return (task.from === member.id || task.toID === member.id)
    })

    for (let task of taskList) {
      const deltask = await API.graphql(graphqlOperation(deleteTask, {
        input: {
          id: task.id
        }
      }))
      console.log('deleting user created tasks - settings')
    }
  }

  // delete member on click
  const deleteMember = async () => {
    try {
      const userTeamData = await API.graphql(graphqlOperation(listUserTeams, {
        filter: {
          userID: {
            eq: member.id
          }
        }
      }))
      console.log('fetching user team to delete member - member')
      const userTeam = userTeamData.data.listUserTeams.items
  
      const delUserTeam = await API.graphql(graphqlOperation(deleteUserTeams, {
        input: {
          id: userTeam[0].id
        }
      }))
      console.log('removing member - member')

      delUserTasks()
  
      root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
      )
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='member'>
        <div className='name'>
            {member.name}
        </div>
        <div className='email'>
            {member.email}
        </div>
        <button className='assignBtn' onClick={() => setIsOpen(true)}>Assign Task</button>
        <TaskPopup open={ isOpen } onClose={() => setIsOpen(false)} taskMem={ member }/>
        {user.attributes.sub === owner &&
          <button className='removeBtn' onClick={ deleteMember }>Remove</button>
        }
    </div>
  )
}

export default withAuthenticator(Member)