import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { listUserTeams } from "../../graphql/queries";
import { createTeam, createUserTeams } from "../../graphql/mutations";
import React, { useEffect, useState } from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

import { withAuthenticator } from "@aws-amplify/ui-react";

function Sidebar({ user, signOut }) {
  // team list state
  const [myTeamList, setMyTeamList] = useState([]);

  // fetches team list and sets state
  const updateTeams = () => {
    try {
      const fetchTeams = async () => {
        const userTeamData = await API.graphql(
          graphqlOperation(listUserTeams, {
            filter: {
              userID: {
                eq: user.attributes.sub,
              },
            },
          })
        );
        console.log("updating teams - sidebar");
        const userTeamList = userTeamData.data.listUserTeams.items;

        return userTeamList;
      };
      fetchTeams().then((userTeamList) => setMyTeamList(userTeamList));
    } catch (err) {
      console.error(err);
    }
  };

  // updates team list on render
  useEffect(() => {
    updateTeams();
  }, []);

  // creates team
  const createNewTeam = async () => {
    try {
      const name = prompt("Enter Team Name");
      const newTeam = await API.graphql(
        graphqlOperation(createTeam, {
          input: {
            name,
          },
        })
      );
      console.log("creating team - sidebar");

      const userID = user.attributes.sub;
      const teamID = newTeam.data.createTeam.id;

      const newUserTeam = await API.graphql(
        graphqlOperation(createUserTeams, {
          input: {
            userID: userID,
            teamID: teamID,
          },
        })
      );
      console.log("creating user team - sidebar");

      updateTeams();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebarMenu">
        <button className="createTitle" onClick={createNewTeam}>
          Create Team
        </button>
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
                  window.location.href.includes(
                    `/teamPage/${team.teamID}/tasks`
                  ) ||
                  window.location.href.includes(
                    `/teamPage/${team.teamID}/members`
                  ) ||
                  window.location.href.includes(
                    `/teamPage/${team.teamID}/settings`
                  )
                    ? "active"
                    : "inactive"
                }
              >
                <PeopleOutlineIcon
                  style={{ fontSize: 45 }}
                  className="teamPic"
                />
                {team.team.name}
              </NavLink>
            ))}
        </main>
        <Link to={"/"}>
          <button className="signout" onClick={signOut}>
            Sign out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default withAuthenticator(Sidebar);
