import React, {useContext} from 'react'
import { idContextMem } from "../../pages/teammembers/Teammembers";
import { API, graphqlOperation } from "aws-amplify"
import { createUserTeams } from "../../graphql/mutations"

export default function User({user}) {
    const idMem = useContext(idContextMem)

    const addUser = async () => {
        const add = await API.graphql(graphqlOperation(createUserTeams, {
            input: {
                userID: user.id,
                teamID: idMem
            }
        }))
        console.log('added user')
    }

  return (
    <div className='user'>
        {user.name} 
        {user.email} 
        <button onClick={addUser}>Add</button>
    </div>
  )
}
