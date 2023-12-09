import { API, graphqlOperation } from "aws-amplify";
import { listUserTeams } from "../graphql/queries";

// fetches team list and sets state
const updateTeams = (user, setMyTeamList) => {
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

export default updateTeams;
