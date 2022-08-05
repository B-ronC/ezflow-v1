import './sidebar.css';
import { Link } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { listUserTeams } from '../../graphql/queries';
import { createTeam, createUserTeams } from '../../graphql/mutations';
import React, { useEffect, useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';

function Sidebar({user}) {
    // state
    const [teamList, setTeamList] = useState([])  

    // updates teamList
    function updateTeams() {
        try {
            const fetchTeams = async () => {
                const teamObject = await API.graphql(graphqlOperation(listUserTeams, {
                    filter: {
                        userID: {
                            eq: user.attributes.sub
                        }
                    }
                }))
                console.log('updating teams')
                const teamItem = teamObject.data.listUserTeams.items

                return teamItem
            }
            fetchTeams().then(teams => setTeamList(teams))
        } catch (err) {
            console.error(err)
        }
    }

    // update teamList on render
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
            console.log('creating team')

            const userID = user.attributes.sub
            const teamID = newTeam.data.createTeam.id
    
            const newMyTeam = await API.graphql(graphqlOperation(createUserTeams, {
                input: {
                    userID: userID,
                    teamID: teamID
                }
            }))
            console.log('creating myTeam')

            updateTeams() 
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <button className='createTitle' onClick={createNewTeam}>Create Team</button>
                    <main>
                        {teamList.sort((a, b) => {
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
                            <ol
                            key={team.id}
                            >
                                <Link to={`/teamPage/${team.teamID}/tasks`}>
                                    {team.team.name}
                                </Link>
                            </ol>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default withAuthenticator(Sidebar)
