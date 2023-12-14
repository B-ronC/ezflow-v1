import "./deletebutton.css";
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { listUserTeams } from "../../../../graphql/queries";
import { deleteTeam, deleteUserTeams } from "../../../../graphql/mutations";
import delAllTeamTasks from "../../../../functions/delAllTeamTasks";

import { root } from "../../../..";
import App from "../../../../App";
import { BrowserRouter } from "react-router-dom";

function Deletebutton({ currTeamID }) {
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
        const delUserTeam = await API.graphql(
          graphqlOperation(deleteUserTeams, {
            input: {
              id: userTeam.id,
            },
          })
        );
        console.log("deleting user teams - settings");
      }

      const delTeam = await API.graphql(
        graphqlOperation(deleteTeam, {
          input: {
            id: currTeamID,
          },
        })
      );
      console.log("deleting team - settings");

      delAllTeamTasks(currTeamID);

      root.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="box">
      <h2>Delete team:</h2>
      <Link to={"/"}>
        <button id="btn" onClick={deleteTeamF}>
          Delete
        </button>
      </Link>
    </div>
  );
}

export default Deletebutton;
