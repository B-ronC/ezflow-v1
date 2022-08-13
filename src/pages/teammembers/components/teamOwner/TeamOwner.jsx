import './teamOwner.css'
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../../../graphql/queries';
import TaskPopup from '../taskPopup/TaskPopup';

function TeamOwner({ owner }) {
    const [teamOwner, setTeamOwner] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    // fetch team owner
    function fetchOwner() {
        try {
            const fetchUser = async () => {
                const userData = await API.graphql(graphqlOperation(getUser, {
                    id: owner
                }))
                console.log('fetching owner - team owner')
                const user = userData.data.getUser
            
                return user
            }
            fetchUser().then(user => setTeamOwner(user))
        } catch (err) {
                console.error(err)
        }
    }

    useEffect(() => {
        fetchOwner()
    }, [])

    return (
        <div className='owner'>
            <div className='name'>
                {teamOwner.name}
            </div>
            <div className='email'>
                {teamOwner.email}
            </div>
            <button className='assignBtn' onClick={() => setIsOpen(true)}>Assign Task</button>
            <TaskPopup open={ isOpen } onClose={() => setIsOpen(false)} taskMem={ teamOwner }/>
        </div>
    )
    }

export default TeamOwner