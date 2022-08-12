import './sidebar.css';
import { Link } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { listUserTeams } from '../../graphql/queries';
import { createTeam, createUserTeams } from '../../graphql/mutations';
import React, { useEffect, useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';

function Sidebar({user}) {
    // state
    const [myTeamList, setMyTeamList] = useState([])

    // updates teamList
    function updateTeams() {
        try {
            const fetchTeams = async () => {
                const userTeamData = await API.graphql(graphqlOperation(listUserTeams, {
                    filter: {
                        userID: {
                            eq: user.attributes.sub
                        }
                    }
                }))
                console.log('updating teams - sidebar')
                const userTeamList = userTeamData.data.listUserTeams.items

                return userTeamList
            }
            fetchTeams().then(userTeamList => setMyTeamList(userTeamList))
        } catch (err) {
            console.error(err)
        }
    }

    // update myTeamList on render
    useEffect(() => {
        updateTeams()
    }, [])
    
    // creates team
    const createNewTeam = async () => {
        try {
            const name = prompt('Enter Team Name')
            const newTeam = await API.graphql(graphqlOperation(createTeam, {
            input: {
                name
            }
            }))
            console.log('creating team - sidebar')

            const userID = user.attributes.sub
            const teamID = newTeam.data.createTeam.id
    
            const newUserTeam = await API.graphql(graphqlOperation(createUserTeams, {
                input: {
                    userID: userID,
                    teamID: teamID
                }
            }))
            console.log('creating user team - sidebar')

            updateTeams() 
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='sidebar'>
            <div className='sidebarMenu'>
                <button className='createTitle' onClick={createNewTeam}>Create Team</button>
                <main>
                    {myTeamList.sort((a, b) => {
                    let fa = a.createdAt.toLowerCase(),
                        fb = b.createdAt.toLowerCase();

                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                    }).map((team) => (
                        <Link key={team.id} to={`/teamPage/${team.teamID}/tasks`} style={{textDecoration: 'none'}}>
                            <div className='row'>
                                {team.team.name}
                            </div>
                        </Link>
                    ))}
                </main>
            </div>
        </div>
    )
}

export default withAuthenticator(Sidebar)
