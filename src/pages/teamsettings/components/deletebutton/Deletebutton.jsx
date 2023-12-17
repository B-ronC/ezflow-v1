import "./deletebutton.css";
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { listUserTeams } from "../../../../graphql/queries";
import { deleteTeam, deleteUserTeams } from "../../../../graphql/mutations";
import delAllTeamTasks from "../../../../functions/delAllTeamTasks";

import { root } from "../../../..";
import App from "../../../../App";

function Deletebutton({ currTeamID }) {
  const navigate = useNavigate();

  // deletes whole team (team/members/tasks)
  const deleteTeamF = async () => {
    try {
      const userTeamData = await API.graphql(
        graphqlOperation(listUserTeams, {
          filter: {
            teamID: {
              eq: currTeamID,
            },
          },
        })
      );
      console.log("fetching user teams to delete - settings");
      const userTeamList = userTeamData.data.listUserTeams.items;

      for (let userTeam of userTeamList) {
        await API.graphql(
          graphqlOperation(deleteUserTeams, {
            input: {
              id: userTeam.id,
            },
          })
        );
        console.log("deleting user teams - settings");
      }

      await API.graphql(
        graphqlOperation(deleteTeam, {
          input: {
            id: currTeamID,
          },
        })
      );
      console.log("deleting team - settings");

      await delAllTeamTasks(currTeamID);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = async () => {
    await deleteTeamF();
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    navigate("/");
  };

  return (
    <div className="box">
      <h2>Delete team:</h2>
      <button id="btn" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default Deletebutton;
