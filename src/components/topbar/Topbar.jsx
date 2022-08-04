import React from 'react'
import "./topbar.css"
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
          <div className="topleft">
              <Link to="/" style={{textDecoration: "none"}}>
              <span className='logo'>ezflow</span>
              </Link>
          </div>
      </div>
    </div>
  )
}
