import "./teamsettings.css";
import React, { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import Teamnavbar from "../../components/teamnavbar/Teamnavbar";
import { getTeam } from "../../graphql/queries";

import Leavebutton from "./components/leavebutton/Leavebutton";
import Deletebutton from "./components/deletebutton/Deletebutton";

function Teamsettings({ user }) {
  const { currTeamID } = useParams();

  // enables/disables leave/delete button if user is owner
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

  return (
    <div className="Teamsettings">
      <Teamnavbar currTeamID={currTeamID} />
      <Leavebutton user={user} currTeamID={currTeamID} />
      <Deletebutton currTeamID={currTeamID} />
    </div>
  );
}

export default withAuthenticator(Teamsettings);
