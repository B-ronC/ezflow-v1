import './user.css'
import React, {useContext} from 'react';
import { teamIDContextMem } from '../../pages/teammembers/Teammembers';
import { API, graphqlOperation } from 'aws-amplify';
import { createUserTeams } from '../../graphql/mutations';

import { root } from '../..';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

function User({ user }) {
    const currTeamID = useContext(teamIDContextMem)
    
    // adds user to current team on button click
    const addUser = async () => {
        try {
            const createUserTeam = await API.graphql(graphqlOperation(createUserTeams, {
                input: {
                    userID: user.id,
                    teamID: currTeamID
                }
            }))
            console.log('added user')

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
    <div className='user'>
        <div>{user.name} </div>
        <div>{user.email} </div>
        <button onClick={addUser}>Add</button>
    </div>
  )
}

export default User
