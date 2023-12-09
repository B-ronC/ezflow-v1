import "./topbar.css";
import React from "react";
import Logo from "./components/logo/Logo";
import Profile from "./components/profile/Profile";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Logo />
        <Profile />
      </div>
    </div>
  );
}

export default Topbar;
