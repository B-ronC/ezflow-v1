import './teamnavbar.css';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { idContextTask } from '../../pages/teamtasks/Teamtasks';
import { idContextMem } from '../../pages/teammembers/Teammembers';
import { idContextSet } from '../../pages/teamsettings/Teamsettings'; 

function Teamnavbar() {
    const idTask = useContext(idContextTask)
    const idMem = useContext(idContextMem)
    const idSet = useContext(idContextSet)

    let id
    if (idTask !== undefined) {
        id = idTask
    } else if (idMem !== undefined) {
        id = idMem
    } else {
        id = idSet
    }

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to={`/teamPage/${id}/tasks`} style={{textDecoration: 'none'}}>
                        <h3>My Tasks</h3>
                    </Link>
                </li>
                <li>
                    <Link to={`/teamPage/${id}/members`} style={{textDecoration: 'none'}}>
                        <h3>Members</h3>
                    </Link>
                </li>
                <li>
                    <Link to={`/teamPage/${id}/settings`} style={{textDecoration: 'none'}}>
                        <h3>Settings</h3>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Teamnavbar
