import './user.css'
import React, {useContext} from 'react';
import { idContextMem } from '../../pages/teammembers/Teammembers';
import { API, graphqlOperation } from 'aws-amplify';
import { createUserTeams } from '../../graphql/mutations';

function User({user}) {
    const idMem = useContext(idContextMem)

    // adds user to current team on button click
    const addUser = async () => {
        try {
            const add = await API.graphql(graphqlOperation(createUserTeams, {
                input: {
                    userID: user.id,
                    teamID: idMem
                }
            }))
            console.log('added user')
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
