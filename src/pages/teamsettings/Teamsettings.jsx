import './teamsettings.css'
import React from 'react'
import Teamnavbar from '../../components/teamnavbar/Teamnavbar'
import { Link, useParams } from 'react-router-dom'
import { API, graphqlOperation } from "aws-amplify"
import { listUserTeams } from "../../graphql/queries"
import { deleteTeamTest, deleteUserTeams } from "../../graphql/mutations"

import { root } from '../..'
import App from '../../App'
import { BrowserRouter } from 'react-router-dom';

export const idContext3 = React.createContext()

export default function Teamsettings() {
  const { id } = useParams()

  const deleteTeam = async () => {
    const teamObject = await API.graphql(graphqlOperation(listUserTeams, {
      filter: {
          teamTestID: {
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

    const del = await API.graphql(graphqlOperation(deleteTeamTest, {
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
      <idContext3.Provider value={id}>
        <Teamnavbar />
      </idContext3.Provider>
      <Link to={'/'}>
        <button onClick={deleteTeam}>Delete Team</button>
      </Link>
      </div>
  )
}
