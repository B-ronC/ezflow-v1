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
            <h1 className="logoName">ezflow</h1>
          </Link>
        </div>
        <div className="profile">
          <AccountCircleIcon
            style={{ fontSize: "5vh" }}
            className="profileIcon"
          />
          <h1 className="userName">{user.attributes.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Topbar);
