import "./teamnavbar.css"
import React from 'react'
import { Link } from "react-router-dom";

export default function Teamnavbar() {
  return (
    <nav className='nav'>
        <ul>
            <li>
                <Link to={'/teamPage/tasks'} style={{textDecoration: "none"}}>
                    <h3>My Tasks</h3>
                </Link>
            </li>
            <li>
                <Link to={'/teamPage/members'} style={{textDecoration: "none"}}>
                    <h3>Members</h3>
                </Link>
            </li>
            <li>
                <Link to={'/teamPage/settings'} style={{textDecoration: "none"}}>
                    <h3>Settings</h3>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
