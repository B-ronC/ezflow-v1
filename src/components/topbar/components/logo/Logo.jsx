import "./logo.css";
import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="logoName">ezflow</h1>
      </Link>
    </div>
  );
}

export default Logo;
