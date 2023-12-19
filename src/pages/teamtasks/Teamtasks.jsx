import "./teamtasks.css";
import React, { useState, useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useParams } from "react-router-dom";

import updateAllTasks from "../../functions/updateAllTasks";
import Teamnavbar from "../../components/teamnavbar/Teamnavbar";
import MyActiveTasks from "./components/myActiveTasks/MyActiveTasks";
import MyWaitingTasks from "./components/myWaitingTasks/MyWaitingTasks";
import MyCreatedTasks from "./components/myCreatedTasks/MyCreatedTasks";
import Taskbox from "./components/taskbox/Taskbox";

function Teamtasks({ user }) {
  const { currTeamID } = useParams();

  const [activeTasks, setActiveTasks] = useState([]);
  const [waitingTasks, setWaitingTasks] = useState([]);
  const [createdTasks, setCreatedTasks] = useState([]);

  // updates task lists on render
  useEffect(() => {
    updateAllTasks(
      user,
      currTeamID,
      setActiveTasks,
      setWaitingTasks,
      setCreatedTasks
    );
  }, [currTeamID]);

  return (
    <div className="Teamtasks">
      <Teamnavbar currTeamID={currTeamID} />
      <div className="taskWrapper">
        <Taskbox
          title={"My Active Tasks:"}
          content={
            <MyActiveTasks
              myActiveTasks={activeTasks}
              user={user}
              currTeamID={currTeamID}
              setActiveTasks={setActiveTasks}
              setWaitingTasks={setWaitingTasks}
              setCreatedTasks={setCreatedTasks}
            />
          }
        />
        <Taskbox
          title={"My Waiting Tasks:"}
          content={
            <MyWaitingTasks
              myWaitingTasks={waitingTasks}
              user={user}
              currTeamID={currTeamID}
              setActiveTasks={setActiveTasks}
              setWaitingTasks={setWaitingTasks}
              setCreatedTasks={setCreatedTasks}
            />
          }
        />
        <Taskbox
          title={"My Created Tasks:"}
          content={<MyCreatedTasks myCreatedTasks={createdTasks} />}
        />
      </div>
    </div>
  );
}

export default withAuthenticator(Teamtasks);
