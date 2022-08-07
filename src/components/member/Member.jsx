import './member.css'
import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUserTeams } from '../../graphql/queries';
import { deleteUserTeams } from '../../graphql/mutations';

import { root } from '../..';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

function Member({ user, member, owner }) {
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
      console.log('deleting user team - member')
  
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
        <button className='assignBtn'>Assign Task</button>
        {user.attributes.sub === owner &&
          <button className='removeBtn' onClick={ deleteMember }>Remove</button>
        }
    </div>
  )
}

export default withAuthenticator(Member)