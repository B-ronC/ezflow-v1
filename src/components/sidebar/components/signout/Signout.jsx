import "./signout.css";
import React from "react";
import { Link } from "react-router-dom";

function Signout({ signOut }) {
  return (
    <Link to={"/"}>
      <button className="signout" onClick={signOut}>
        Sign out
      </button>
    </Link>
  );
}

export default Signout;
