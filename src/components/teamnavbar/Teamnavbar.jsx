import "./teamnavbar.css"
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { idContext1 } from "../../pages/teamtasks/Teamtasks";
import { idContext2 } from "../../pages/teammembers/Teammembers";
import { idContext3 } from "../../pages/teamsettings/Teamsettings"; 

export default function Teamnavbar() {
    const id1 = useContext(idContext1)
    const id2 = useContext(idContext2)
    const id3 = useContext(idContext3)

    let id
    if (id1 !== undefined) {
        id = id1
    } else if (id2 !== undefined) {
        id = id2
    } else {
        id = id3
    }
    

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to={`/teamPage/${id}/tasks`} style={{textDecoration: "none"}}>
                        <h3>My Tasks</h3>
                    </Link>
                </li>
                <li>
                    <Link to={`/teamPage/${id}/members`} style={{textDecoration: "none"}}>
                        <h3>Members</h3>
                    </Link>
                </li>
                <li>
                    <Link to={`/teamPage/${id}/settings`} style={{textDecoration: "none"}}>
                        <h3>Settings</h3>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
