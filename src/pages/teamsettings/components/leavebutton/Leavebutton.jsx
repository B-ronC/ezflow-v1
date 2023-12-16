import "./leavebutton.css";
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { listUserTeams } from "../../../../graphql/queries";
import { deleteUserTeams } from "../../../../graphql/mutations";
import delAllUserTasks from "../../../../functions/delAllUserTasks";

import { root } from "../../../..";
import App from "../../../../App";

function Leavebutton({ user, currTeamID }) {
  const navigate = useNavigate();

  // removes member and related tasks when user leaves team
  const leaveTeam = async () => {
    try {
      const userTeamData = await API.graphql(
        graphqlOperation(listUserTeams, {
          filter: {
            userID: {
              eq: user.attributes.sub,
            },
          },
        })
      );
      console.log("fetching user team to delete - settings");
      const userTeam = userTeamData.data.listUserTeams.items;

      await API.graphql(
        graphqlOperation(deleteUserTeams, {
          input: {
            id: userTeam[0].id,
          },
        })
      );
      console.log("deleting user team - settings");

      await delAllUserTasks(currTeamID, user.attributes.sub);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = async () => {
    await leaveTeam();
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    navigate("/");
  };

  return (
    <div className="box">
      <h2>Leave team:</h2>
      <button id="lbtn" onClick={handleClick}>
        Leave
      </button>
    </div>
  );
}

export default Leavebutton;
