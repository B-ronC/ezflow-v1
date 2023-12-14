import "./sidebar.css";
import React, { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import updateTeams from "../../functions/updateTeams";

import Createteam from "./components/createteam/Createteam";
import Teamlist from "./components/teamlist/Teamlist";
import Signout from "./components/signout/Signout";

function Sidebar({ user }) {
  // team list state
  const [myTeamList, setMyTeamList] = useState([]);

  // updates team list on render
  useEffect(() => {
    updateTeams(user, setMyTeamList);
  }, [user]);

  return (
    <div className="sidebar">
      <div className="sidebarMenu">
        <Createteam user={user} setMyTeamList={setMyTeamList} />
        <Teamlist myTeamList={myTeamList} />
        <Signout />
      </div>
    </div>
  );
}

export default withAuthenticator(Sidebar);
