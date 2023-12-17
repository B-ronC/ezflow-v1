import "./createteam.css";
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createTeam, createUserTeams } from "../../../../graphql/mutations";
import updateTeams from "../../../../functions/updateTeams";

function Createteam({ user, setMyTeamList }) {
  // creates team
  const createNewTeam = async () => {
    try {
      const name = prompt("Enter Team Name");
      const newTeam = await API.graphql(
        graphqlOperation(createTeam, {
          input: {
            name,
          },
        })
      );
      console.log("creating team - sidebar");

      const userID = user.attributes.sub;
      const teamID = newTeam.data.createTeam.id;

      await API.graphql(
        graphqlOperation(createUserTeams, {
          input: {
            userID: userID,
            teamID: teamID,
          },
        })
      );
      console.log("creating user team - sidebar");

      updateTeams(user, setMyTeamList);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button className="createTitle" onClick={createNewTeam}>
      Create Team
    </button>
  );
}

export default Createteam;
