import "./topbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

function Topbar({ user }) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">ezflow</span>
          </Link>
        </div>
        <div className="topRight">
          <span className="userName">{user.attributes.name}</span>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Topbar);
