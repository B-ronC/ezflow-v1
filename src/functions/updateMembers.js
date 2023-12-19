import { API, graphqlOperation } from "aws-amplify";
import { listUserTeams } from "../graphql/queries";

// updates member list
const updateMembers = (currTeamID, setMemberList) => {
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
};

export default updateMembers;
