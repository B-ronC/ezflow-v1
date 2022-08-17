import "./teamnavbar.css";
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { NavLink } from "react-router-dom";
import { getTeam } from "../../graphql/queries";

function Teamnavbar({ currTeamID }) {
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
    <div className="nav">
      <h1>{team.name}</h1>
      <ul>
        <li>
          <NavLink
            to={`/teamPage/${currTeamID}/tasks`}
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "activeTeam" : "inactiveTeam"
            }
          >
            <h4>My Tasks</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/teamPage/${currTeamID}/members`}
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "activeTeam" : "inactiveTeam"
            }
          >
            <h4>Members</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/teamPage/${currTeamID}/settings`}
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "activeTeam" : "inactiveTeam"
            }
          >
            <h4>Settings</h4>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Teamnavbar;
