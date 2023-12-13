import "./teamnavbar.css";
import Teamname from "./components/teamname/Teamname";
import Link from "./components/link/Link";

function Teamnavbar({ currTeamID }) {
  return (
    <div className="nav">
      <Teamname currTeamID={currTeamID} />
      <ul>
        <li>
          <Link link={`/teamPage/${currTeamID}/tasks`} title={"My Tasks"} />
        </li>
        <li>
          <Link link={`/teamPage/${currTeamID}/members`} title={"Members"} />
        </li>
        <li>
          <Link link={`/teamPage/${currTeamID}/settings`} title={"Settings"} />
        </li>
      </ul>
    </div>
  );
}

export default Teamnavbar;
