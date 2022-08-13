import "./teamsettings.css";
import React, { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Link, useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { listUserTeams, getTeam } from "../../graphql/queries";
import { deleteTeam, deleteUserTeams } from "../../graphql/mutations";
import Teamnavbar from "../../components/teamnavbar/Teamnavbar";
import delAllUserTasks from "../../functions/delAllUserTasks/delAllUserTasks";
import delAllTeamTasks from "../../functions/delAllTeamTasks/delAllTeamTasks";

import { root } from "../..";
import App from "../../App";
import { BrowserRouter } from "react-router-dom";

export const teamIDContextSet = React.createContext();

function Teamsettings({ user }) {
  const { currTeamID } = useParams();

  // enables / disables delete button if user is owner
  const checkOwner = async () => {
    try {
      const teamData = await API.graphql(
        graphqlOperation(getTeam, {
          id: currTeamID,
        })
      );
      console.log("checking owner - settings");
      const team = teamData.data.getTeam;

      if (team.owner.includes(user.attributes.sub)) {
        document.getElementById("lbtn").disabled = true;
        document.getElementById("btn").disabled = false;
      } else {
        document.getElementById("lbtn").disabled = false;
        document.getElementById("btn").disabled = true;
      }
    } catch (err) {
      console.error(err);
    }
  };

  // checks owner on render
  useEffect(() => {
    checkOwner();
  }, []);

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
    <div className="Teamsettings">
      <Teamnavbar currTeamID={currTeamID} />
      <Link to={"/"}>
        <button className="leave" id="lbtn" onClick={leaveTeam}>
          Leave
        </button>
      </Link>
      <Link to={"/"}>
        <button className="delete" id="btn" onClick={deleteTeamF}>
          Delete
        </button>
      </Link>
    </div>
  );
}

export default withAuthenticator(Teamsettings);
