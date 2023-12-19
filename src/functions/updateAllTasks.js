import { API, graphqlOperation } from "aws-amplify";
import { listUserTasks, listTasks } from "../graphql/queries";

const updateAllTasks = (
  user,
  currTeamID,
  setActiveTasks,
  setWaitingTasks,
  setCreatedTasks
) => {
  try {
    // updates active task and waiting task lists
    const fetchTasks = async () => {
      const userTaskData = await API.graphql(
        graphqlOperation(listUserTasks, {
          filter: {
            userID: {
              eq: user.attributes.sub,
            },
          },
        })
      );
      console.log("fetching assigned tasks - tasks");
      const userTaskList = userTaskData.data.listUserTasks.items;

      return userTaskList;
    };
    fetchTasks().then((userTaskList) => {
      setWaitingTasks(
        userTaskList.filter((value) => {
          return value.task.teamID === currTeamID && value.task.status === 0;
        })
      );
      setActiveTasks(
        userTaskList.filter((value) => {
          return value.task.teamID === currTeamID && value.task.status === 1;
        })
      );
    });

    // updates created task list
    const fetchCreatedTasks = async () => {
      const taskData = await API.graphql(
        graphqlOperation(listTasks, {
          filter: {
            from: {
              eq: user.attributes.sub,
            },
          },
        })
      );
      console.log("fetching created tasks - tasks");
      const taskList = taskData.data.listTasks.items;

      return taskList;
    };
    fetchCreatedTasks().then((taskList) =>
      setCreatedTasks(
        taskList.filter((value) => {
          return value.teamID === currTeamID;
        })
      )
    );
  } catch (err) {
    console.error(err);
  }
};

export default updateAllTasks;
