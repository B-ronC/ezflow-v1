import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../../../graphql/queries';

function FromUser({ userid }) {
    const [user, setUser] = useState([])

    // updates task list
    function updateUser() {
        try {
            const fetchUser = async () => {
                const userData = await API.graphql(graphqlOperation(getUser, {
                    id: userid
                }))
                console.log('fetching user - from User')
                const user = userData.data.getUser

                return user
            }
            fetchUser().then(user => setUser(user))
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        updateUser()
    }, [])

    return (
        <>
        {user.length !== 0 && 
            <div>{ user.name }</div> }
        </>
    )
}

export default FromUser