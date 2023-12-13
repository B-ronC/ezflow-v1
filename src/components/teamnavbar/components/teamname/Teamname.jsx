import "./teamname.css";
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getTeam } from "../../../../graphql/queries";

function Teamname({ currTeamID }) {
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

  // updates team name on render
  useEffect(() => {
    getTeamName();
  }, [currTeamID]);

  return <h1 className="teamName">{team.name}</h1>;
}

export default Teamname;
