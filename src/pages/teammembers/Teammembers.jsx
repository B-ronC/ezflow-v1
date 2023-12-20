import "./teammembers.css";
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom";
import { getTeam, listUsers } from "../../graphql/queries";

import updateMembers from "../../functions/updateMembers";
import Teamnavbar from "../../components/teamnavbar/Teamnavbar";
import Searchbar from "./components/searchbar/Searchbar";
import TeamOwner from "./components/teamOwner/TeamOwner";
import Member from "./components/member/Member";

export const teamIDContextMem = React.createContext();
export const setMemberListContext = React.createContext();

function Teammembers() {
  const { currTeamID } = useParams();

  const [teamOwnerID, setTeamOwnerID] = useState([]);
  const [userList, setUserList] = useState([]);
  const [memberList, setMemberList] = useState([]);

  // fetches team owner id to pass as a prop
  const fetchOwner = () => {
    try {
      const fetchTeam = async () => {
        const teamData = await API.graphql(
          graphqlOperation(getTeam, {
            id: currTeamID,
          })
        );
        console.log("fetching team to determine owner ID - members");
        const team = teamData.data.getTeam;

        return team;
      };
      fetchTeam().then((team) => setTeamOwnerID(team.owner));
    } catch (err) {
      console.error(err);
    }
  };

  // fetches user list for search bar
  const updateUsers = () => {
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
  };

  useEffect(() => {
    updateUsers();
    updateMembers(currTeamID, setMemberList);
    fetchOwner();
  }, []);

  return (
    <div className="Teammembers">
      <Teamnavbar currTeamID={currTeamID} />
      <teamIDContextMem.Provider value={currTeamID}>
        <setMemberListContext.Provider value={setMemberList}>
          <Searchbar
            placeholder={"Search user..."}
            data={userList}
            userTeamList={memberList}
          />
          <h3>Owner:</h3>
          {teamOwnerID.length !== 0 && (
            <div>
              <TeamOwner ownerID={teamOwnerID} />
              <h3>Members:</h3>
              {memberList
                .filter((value) => {
                  return value.user.id !== teamOwnerID;
                })
                .sort((a, b) => {
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
                      ownerID={teamOwnerID}
                      teamid={currTeamID}
                      setMemberList={setMemberList}
                    />
                  );
                })}
            </div>
          )}
        </setMemberListContext.Provider>
      </teamIDContextMem.Provider>
    </div>
  );
}

export default Teammembers;
