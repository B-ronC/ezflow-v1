import "./teammembers.css";
import React, { useState, useEffect } from "react";
import Teamnavbar from "../../components/teamnavbar/Teamnavbar";
import Searchbar from "./components/searchbar/Searchbar";
import TeamOwner from "./components/teamOwner/TeamOwner";
import Member from "./components/member/Member";

import { API, graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom";
import { getTeam, listUsers, listUserTeams } from "../../graphql/queries";

export const teamIDContextMem = React.createContext();

function Teammembers() {
  const { currTeamID } = useParams();

  const [userList, setUserList] = useState([]);
  const [memberList, setMemberList] = useState([]);
  const [teamOwner, setTeamOwner] = useState([]);

  // fetches owner of current team and
  function fetchOwner() {
    try {
      const fetchTeam = async () => {
        const teamData = await API.graphql(
          graphqlOperation(getTeam, {
            id: currTeamID,
          })
        );
        console.log("fetching team to determine owner - members");
        const team = teamData.data.getTeam;

        return team;
      };
      fetchTeam().then((team) => setTeamOwner(team.owner));
    } catch (err) {
      console.error(err);
    }
  }

  // fetches user list for search bar
  function updateUsers() {
    try {
      const fetchUsers = async () => {
        const userData = await API.graphql(graphqlOperation(listUsers));
        console.log("fetching users for search bar - members");
        const userList = userData.data.listUsers.items;

        return userList;
      };
      fetchUsers().then((userList) => setUserList(userList));
    } catch (err) {
      console.error(err);
    }
  }

  // updates member list for members page
  function updateMembers() {
    try {
      const fetchUsers = async () => {
        const userTeamData = await API.graphql(
          graphqlOperation(listUserTeams, {
            filter: {
              teamID: {
                eq: currTeamID,
              },
            },
          })
        );
        console.log("fetching members - members");
        const userTeamList = userTeamData.data.listUserTeams.items;

        return userTeamList;
      };
      fetchUsers().then((userTeamList) => setMemberList(userTeamList));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    updateUsers();
    updateMembers();
    fetchOwner();
  }, []);

  return (
    <div className="Teammembers">
      <Teamnavbar currTeamID={currTeamID} />
      <teamIDContextMem.Provider value={currTeamID}>
        <Searchbar
          placeholder={"Search user..."}
          data={userList}
          userTeamList={memberList}
        />
        <h3>Owner:</h3>
        {teamOwner.length !== 0 && (
          <div>
            <TeamOwner owner={teamOwner} />
            <h3>Members:</h3>
            {memberList
              .filter((value) => {
                return value.user.id !== teamOwner;
              })
              .sort(function (a, b) {
                if (a.user.name < b.user.name) {
                  return -1;
                }
                if (a.user.name > b.user.name) {
                  return 1;
                }
                return 0;
              })
              .map((member) => {
                return (
                  <Member
                    key={member.user.id}
                    member={member.user}
                    owner={teamOwner}
                    teamid={currTeamID}
                  />
                );
              })}
          </div>
        )}
      </teamIDContextMem.Provider>
    </div>
  );
}

export default Teammembers;
