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

export const idContextSet = React.createContext()

function Teamsettings({user}) {
  const { id } = useParams()

  // enables / disables delete button if user is owner
  const checkOwner = async () => {
    try {
      const team = await API.graphql(graphqlOperation(getTeam, {
        id: id
      }))
      console.log('fetching team')
      const teamItem = team.data.getTeam

      if (teamItem.owner.includes(user?.attributes.sub)) {
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
      const teamObject = await API.graphql(graphqlOperation(listUserTeams, {
        filter: {
            teamID: {
                eq: id
            }
        }
      }))
      console.log('fetching user teams')
      const teamItem = teamObject.data.listUserTeams.items
  
      for (let team of teamItem) {
        const delUserTeam = await API.graphql(graphqlOperation(deleteUserTeams, {
          input: {
              id: team.id
          }
        }))
        console.log('deleting user team')
      }
  
      const del = await API.graphql(graphqlOperation(deleteTeam, {
        input: {
            id
        }
      }))
      console.log('deleting team')
  
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
      <idContextSet.Provider value={id}>
        <Teamnavbar />
      </idContextSet.Provider>
      <Link to={'/'}>
        <button id='btn' onClick={deleteTeamF}>Delete Team</button>
      </Link>
      </div>
  )
}

export default withAuthenticator(Teamsettings)
