import "./leavebutton.css";
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { listUserTeams } from "../../../../graphql/queries";
import { deleteUserTeams } from "../../../../graphql/mutations";
import delAllUserTasks from "../../../../functions/delAllUserTasks";

import { root } from "../../../..";
import App from "../../../../App";
import { BrowserRouter } from "react-router-dom";

function Leavebutton({ user, currTeamID }) {
  // removes member and related tasks when leave
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

      const delUserTeam = await API.graphql(
        graphqlOperation(deleteUserTeams, {
          input: {
            id: userTeam[0].id,
          },
        })
      );
      console.log("leaving team - settings");

      delAllUserTasks(currTeamID, user.attributes.sub);

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
      <h2>Leave team:</h2>
      <Link to={"/"}>
        <button id="lbtn" onClick={leaveTeam}>
          Leave
        </button>
      </Link>
    </div>
  );
}

export default Leavebutton;
