import "./member.css";
import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { listUserTeams } from "../../../../graphql/queries";
import { deleteUserTeams } from "../../../../graphql/mutations";

import delAllUserTasks from "../../../../functions/delAllUserTasks";
import updateMembers from "../../../../functions/updateMembers";
import TaskPopup from "../taskPopup/TaskPopup";

function Member({ user, member, ownerID, teamid, setMemberList }) {
  const [isOpen, setIsOpen] = useState(false);

  // deletes member on click
  const deleteMember = async () => {
    try {
      const userTeamData = await API.graphql(
        graphqlOperation(listUserTeams, {
          filter: {
            userID: {
              eq: member.id,
            },
          },
        })
      );
      console.log("fetching user team - member");
      const userTeam = userTeamData.data.listUserTeams.items;

      await API.graphql(
        graphqlOperation(deleteUserTeams, {
          input: {
            id: userTeam[0].id,
          },
        })
      );
      console.log("removing member - member");

      await delAllUserTasks(teamid, member.id);
      updateMembers(teamid, setMemberList);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="member">
      <div className="name">{member.name}</div>
      <div className="email">{member.email}</div>
      <button className="assignBtn" onClick={() => setIsOpen(true)}>
        Assign Task
      </button>
      <TaskPopup
        open={isOpen}
        onClose={() => setIsOpen(false)}
        taskMem={member}
      />
      {user.attributes.sub === ownerID && (
        <button className="removeBtn" onClick={deleteMember}>
          Remove
        </button>
      )}
    </div>
  );
}

export default withAuthenticator(Member);
