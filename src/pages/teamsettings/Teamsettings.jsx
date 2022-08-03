import './teamsettings.css'
import React, { useContext } from 'react'
import Teamnavbar from '../../components/teamnavbar/Teamnavbar'
import { Link, useParams, useLocation } from 'react-router-dom'
import { API, graphqlOperation } from "aws-amplify"
import { listUserTeams } from "../../graphql/queries"
import { deleteTeamTest, deleteUserTeams } from "../../graphql/mutations"
import { Auth } from 'aws-amplify';

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
    const teamItem = teamObject.data.listUserTeams.items

    for (let team of teamItem) {
      const delUserTeam = await API.graphql(graphqlOperation(deleteUserTeams, {
        input: {
            id: team.id
        }
      }))
    }

    const del = await API.graphql(graphqlOperation(deleteTeamTest, {
      input: {
          id
      }
    }))
    console.log('deleting team')

  // Auth.currentAuthenticatedUser().then(async (user) => {
  //   const fetchTeams = async () => {
  //       const teamObject = await API.graphql(graphqlOperation(listUserTeams, {
  //           filter: {
  //               userTestID: {
  //                   eq: user.attributes.sub
  //               }
  //           }
  //       }))
  //       const teamItem = teamObject.data.listUserTeams.items
  //       return teamItem
        
  //   }
  //   fetchTeams().then(teams => setTeamList(teams))
  // })
  // console.log("updating teams")

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
