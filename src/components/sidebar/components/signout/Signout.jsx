import "./signout.css";
import React from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

function Signout() {
  async function handleSignOut() {
    try {
      console.log("Signed Out");
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <Link to={"/"}>
      <button className="signout" onClick={handleSignOut}>
        Sign out
      </button>
    </Link>
  );
}

export default Signout;
