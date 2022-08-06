import './teamsettings.css';
import React, { useEffect } from 'react';
import Teamnavbar from '../../components/teamnavbar/Teamnavbar';
import { Link, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { listUserTeams, getTeam } from '../../graphql/queries';
import { deleteTeam, deleteUserTeams } from '../../graphql/mutations';

import { withAuthenticator } from '@aws-amplify/ui-react';

import { root } from '../..';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

export const teamIDContextSet = React.createContext()

function Teamsettings({user}) {
  const { currTeamID } = useParams()

  // enables / disables delete button if user is owner
  const checkOwner = async () => {
    try {
      const teamData = await API.graphql(graphqlOperation(getTeam, {
        id: currTeamID
      }))
      console.log('checking owner - settings')
      const team = teamData.data.getTeam

      if (team.owner.includes(user.attributes.sub)) {
        document.getElementById('btn').disabled = false;
      } else {
        document.getElementById('btn').disabled = true;
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    checkOwner()
  }, [])

  // delete team / members / tasks
  const deleteTeamF = async () => {
    try {
      const userTeamData = await API.graphql(graphqlOperation(listUserTeams, {
        filter: {
          teamID: {
            eq: currTeamID
          }
        }
      }))
      console.log('fetching user teams for delete - settings')
      const userTeamList = userTeamData.data.listUserTeams.items
  
      for (let userTeam of userTeamList) {
        const delUserTeam = await API.graphql(graphqlOperation(deleteUserTeams, {
          input: {
            id: userTeam.id
          }
        }))
        console.log('deleting user team - settings')
      }
  
      const delTeam = await API.graphql(graphqlOperation(deleteTeam, {
        input: {
          currTeamID
        }
      }))
      console.log('deleting team - settings')
  
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
    <div className='Teamsettings'>
      <teamIDContextSet.Provider value={ currTeamID }>
        <Teamnavbar />
      </teamIDContextSet.Provider>
      <Link to={ '/' }>
        <button className='delete' id='btn' onClick={ deleteTeamF }>Delete Team</button>
      </Link>
      </div>
  )
}

export default withAuthenticator(Teamsettings)
