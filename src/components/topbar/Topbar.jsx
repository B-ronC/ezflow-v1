import "./topbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Topbar({ user }) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logoName">ezflow</span>
          </Link>
        </div>
        <div className="profile">
          <AccountCircleIcon
            style={{ fontSize: "4vh" }}
            className="profileIcon"
          />
          <span className="userName">{user.attributes.name}</span>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Topbar);
