import "./teamlist.css";
import React from "react";
import { NavLink } from "react-router-dom";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

function Teamlist({ myTeamList }) {
  return (
    <main>
      {myTeamList
        .sort((a, b) => {
          let fa = a.createdAt.toLowerCase(),
            fb = b.createdAt.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        })
        .map((team) => (
          <NavLink
            key={team.id}
            to={`/teamPage/${team.teamID}/tasks`}
            style={{ textDecoration: "none" }}
            className={() =>
              window.location.href.includes(`/teamPage/${team.teamID}/tasks`) ||
              window.location.href.includes(
                `/teamPage/${team.teamID}/members`
              ) ||
              window.location.href.includes(`/teamPage/${team.teamID}/settings`)
                ? "active"
                : "inactive"
            }
          >
            <PeopleOutlineIcon
              style={{ fontSize: "4vmin" }}
              className="teamPic"
            />
            {team.team.name}
          </NavLink>
        ))}
    </main>
  );
}

export default Teamlist;
