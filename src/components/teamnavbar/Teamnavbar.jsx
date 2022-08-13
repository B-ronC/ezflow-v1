import "./teamnavbar.css";
import React, { useState, useEffect, useContext } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { getTeam } from "../../graphql/queries";
import { teamIDContextTask } from "../../pages/teamtasks/Teamtasks";
import { teamIDContextMem } from "../../pages/teammembers/Teammembers";
import { teamIDContextSet } from "../../pages/teamsettings/Teamsettings";

function Teamnavbar() {
  const teamIDTask = useContext(teamIDContextTask);
  const teamIDMem = useContext(teamIDContextMem);
  const teamIDSet = useContext(teamIDContextSet);

  // passes team id of prev page to next page
  let currTeamID;
  if (teamIDTask !== undefined) {
    currTeamID = teamIDTask;
  } else if (teamIDMem !== undefined) {
    currTeamID = teamIDMem;
  } else {
    currTeamID = teamIDSet;
  }

  // team name state
  const [team, setTeam] = useState([]);

  // fetches team name and sets state
  const getTeamName = () => {
    const fetchTeam = async () => {
      try {
        const teamData = await API.graphql(
          graphqlOperation(getTeam, {
            id: currTeamID,
          })
        );
        console.log("fetching team name - team navbar");
        const team = teamData.data.getTeam;

        return team;
      } catch (err) {
        console.error(err);
      }
    };
    fetchTeam().then((team) => setTeam(team));
  };

  // updates team name
  useEffect(() => {
    getTeamName();
  }, [currTeamID]);

  return (
    <nav className="nav">
      <h1>{team.name}</h1>
      <ul>
        <li>
          <Link
            to={`/teamPage/${currTeamID}/tasks`}
            style={{ textDecoration: "none" }}
          >
            <h4>My Tasks</h4>
          </Link>
        </li>
        <li>
          <Link
            to={`/teamPage/${currTeamID}/members`}
            style={{ textDecoration: "none" }}
          >
            <h4>Members</h4>
          </Link>
        </li>
        <li>
          <Link
            to={`/teamPage/${currTeamID}/settings`}
            style={{ textDecoration: "none" }}
          >
            <h4>Settings</h4>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Teamnavbar;
