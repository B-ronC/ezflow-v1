import "./link.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Link(props) {
  return (
    <NavLink
      to={props.link}
      style={{ textDecoration: "none" }}
      className={({ isActive }) => (isActive ? "activeTeam" : "inactiveTeam")}
    >
      <h4>{props.title}</h4>
    </NavLink>
  );
}

export default Link;
