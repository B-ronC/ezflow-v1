import './teamnavbar.css';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { teamIDContextTask } from '../../pages/teamtasks/Teamtasks';
import { teamIDContextMem } from '../../pages/teammembers/Teammembers';
import { teamIDContextSet } from '../../pages/teamsettings/Teamsettings'; 

function Teamnavbar() {
    const teamIDTask = useContext(teamIDContextTask)
    const teamIDMem = useContext(teamIDContextMem)
    const teamIDSet = useContext(teamIDContextSet)

    let currTeamID
    if (teamIDTask !== undefined) {
        currTeamID = teamIDTask
    } else if (teamIDMem !== undefined) {
        currTeamID = teamIDMem
    } else {
        currTeamID = teamIDSet
    }

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to={`/teamPage/${currTeamID}/tasks`} style={{textDecoration: 'none'}}>
                        <h3>My Tasks</h3>
                    </Link>
                </li>
                <li>
                    <Link to={`/teamPage/${currTeamID}/members`} style={{textDecoration: 'none'}}>
                        <h3>Members</h3>
                    </Link>
                </li>
                <li>
                    <Link to={`/teamPage/${currTeamID}/settings`} style={{textDecoration: 'none'}}>
                        <h3>Settings</h3>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Teamnavbar
