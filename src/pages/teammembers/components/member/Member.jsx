import "./member.css";
import React, { useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { listUserTeams } from "../../../../graphql/queries";
import { deleteUserTeams } from "../../../../graphql/mutations";

import TaskPopup from "../taskPopup/TaskPopup";
import delAllUserTasks from "../../../../functions/delAllUserTasks/delAllUserTasks";

import { root } from "../../../..";
import App from "../../../../App";
import { BrowserRouter } from "react-router-dom";

function Member({ user, member, owner, teamid }) {
  const [isOpen, setIsOpen] = useState(false);

  // delete member on click
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

      const delUserTeam = await API.graphql(
        graphqlOperation(deleteUserTeams, {
          input: {
            id: userTeam[0].id,
          },
        })
      );
      console.log("removing member - member");

      delAllUserTasks(teamid, member.id);

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
      {user.attributes.sub === owner && (
        <button className="removeBtn" onClick={deleteMember}>
          Remove
        </button>
      )}
    </div>
  );
}

export default withAuthenticator(Member);
