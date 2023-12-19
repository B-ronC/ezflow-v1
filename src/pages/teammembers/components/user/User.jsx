import "./user.css";
import React, { useContext } from "react";
import { teamIDContextMem, setMemberListContext } from "../../Teammembers";
import { API, graphqlOperation } from "aws-amplify";
import { createUserTeams } from "../../../../graphql/mutations";

import updateMembers from "../../../../functions/updateMembers";

function User({ user }) {
  const currTeamID = useContext(teamIDContextMem);
  const setMemberList = useContext(setMemberListContext);

  // adds user to current team on button click
  const addUser = async () => {
    try {
      await API.graphql(
        graphqlOperation(createUserTeams, {
          input: {
            userID: user.id,
            teamID: currTeamID,
          },
        })
      );
      console.log("added user to team");

      updateMembers(currTeamID, setMemberList);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="user">
      <div>{user.name} </div>
      <div>{user.email} </div>
      <button onClick={addUser}>Add</button>
    </div>
  );
}

export default User;
