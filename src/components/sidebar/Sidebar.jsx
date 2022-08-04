import "./sidebar.css";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify"
import { listUserTeams } from "../../graphql/queries"
import { createTeam, createUserTeams } from "../../graphql/mutations"
import React, { useEffect, useState } from 'react';

import { Auth } from 'aws-amplify';

import { root } from '../..'
import App from '../../App'
import { BrowserRouter } from 'react-router-dom';

export default function Sidebar() {
    // state
    const [teamList, setTeamList] = useState([])  

    // updates teamList
    function updateTeams() {
        Auth.currentAuthenticatedUser().then(async (user) => {
            const fetchTeams = async () => {
                const teamObject = await API.graphql(graphqlOperation(listUserTeams, {
                    filter: {
                        userID: {
                            eq: user.attributes.sub
                        }
                    }
                }))
                const teamItem = teamObject.data.listUserTeams.items
                return teamItem
                
            }
            fetchTeams().then(teams => setTeamList(teams))
        })
        console.log("updating teams")
    }

    // update teamList on render
    useEffect(() => {
        updateTeams()
    }, [])
    

    // creates team
    const createNewTeam = async () => {
        Auth.currentAuthenticatedUser().then(async (user) => {
            const name = prompt('Enter Team Name')
            const newTeam = await API.graphql(graphqlOperation(createTeam, {
            input: {
                name
            }
            }))
            console.log("creating team")

            const userID = user.attributes.sub
            const teamID = newTeam.data.createTeam.id
    
            const newMyTeam = await API.graphql(graphqlOperation(createUserTeams, {
                input: {
                    userID: userID,
                    teamID: teamID
                }
            }))

            console.log("creating myTeam")
            //updateTeams()
            root.render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            );
        })
    }

  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <button className="createTitle" onClick={createNewTeam}>Create Team</button>
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
