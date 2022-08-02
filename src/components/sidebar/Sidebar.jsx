import "./sidebar.css"
import GroupIcon from '@mui/icons-material/Group';
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify"
import { getTeamTest, listTeamTests, listUserTeams } from "../../graphql/queries"
import { createTeamTest, createUserTeams } from "../../graphql/mutations"
import { useEffect, useState } from 'react';

import { Auth } from 'aws-amplify';

export default function Sidebar() {
    // state
    const [teamList, setTeamList] = useState([])  

    // updates teamList
    function updateTeams() {
        Auth.currentAuthenticatedUser().then(async (user) => {
            const fetchTeams = async () => {
                const teamObject = await API.graphql(graphqlOperation(listUserTeams, {
                    filter: {
                        userTestID: {
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
            const newTeam = await API.graphql(graphqlOperation(createTeamTest, {
            input: {
                name
            }
            }))
            console.log("creating team")

            const userID = user.attributes.sub
            const teamID = newTeam.data.createTeamTest.id
    
            const newMyTeam = await API.graphql(graphqlOperation(createUserTeams, {
                input: {
                    userTestID: userID,
                    teamTestID: teamID
                }
            }))

            console.log("creating myTeam")
            updateTeams()
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
                            <Link to={`/teamPage/${team.teamTestID}`}>
                                {team.teamTest.name}
                            </Link>
                        </ol>
                    ))}
                </main>
            </div>
        </div>
    </div>
  )
}
