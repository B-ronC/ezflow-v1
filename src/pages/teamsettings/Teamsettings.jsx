import './teamsettings.css'
import React, { useEffect } from 'react'
import Teamnavbar from '../../components/teamnavbar/Teamnavbar'
import { Link, useParams } from 'react-router-dom'
import { API, graphqlOperation } from "aws-amplify"
import { listUserTeams, getTeam } from "../../graphql/queries"
import { deleteTeam, deleteUserTeams } from "../../graphql/mutations"

import { Auth } from 'aws-amplify';

import { root } from '../..'
import App from '../../App'
import { BrowserRouter } from 'react-router-dom';

export const idContextSet = React.createContext()

export default function Teamsettings() {
  const { id } = useParams()

  const checkOwner = async () => {
    
    const team = await API.graphql(graphqlOperation(getTeam, {
      id: id
    }))
    const teamItem = team.data.getTeam

    Auth.currentAuthenticatedUser().then((user) => {
      if (teamItem.owner.includes(user.attributes.sub)) {
        document.getElementById("btn").disabled = false;
      } else {
        document.getElementById("btn").disabled = true;
      }
    })
  }

  useEffect(() => {
    checkOwner()
  }, [])

  const deleteTeamF = async () => {
    const teamObject = await API.graphql(graphqlOperation(listUserTeams, {
      filter: {
          teamID: {
              eq: id
          }
      }
    }))
    console.log('retrieving user teams')
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
    );
  }

  return (
    <div className='Teamsettings'>
      <idContextSet.Provider value={id}>
        <Teamnavbar />
      </idContextSet.Provider>
      <Link to={'/'}>
        <button id="btn" onClick={deleteTeamF}>Delete Team</button>
      </Link>
      </div>
  )
}
