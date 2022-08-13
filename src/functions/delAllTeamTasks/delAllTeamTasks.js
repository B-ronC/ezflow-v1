import { API, graphqlOperation } from "aws-amplify";
import { listTasks, listUserTasks } from "../../graphql/queries";
import { deleteUserTasks, deleteTask } from "../../graphql/mutations";

// delete all tasks connected to team
const delAllTeamTasks = async (currTeamID) => {
  try {
    const userTaskData = await API.graphql(graphqlOperation(listUserTasks));
    console.log("fetching user tasks to delete - settings");
    const userTaskList = userTaskData.data.listUserTasks.items.filter(
      (userTask) => {
        return userTask.task.teamID === currTeamID;
      }
    );

    for (let userTask of userTaskList) {
      const delUserTask = await API.graphql(
        graphqlOperation(deleteUserTasks, {
          input: {
            id: userTask.id,
          },
        })
      );
      console.log("deleting user tasks - settings");
    }

    const taskData = await API.graphql(
      graphqlOperation(listTasks, {
        filter: {
          teamID: {
            eq: currTeamID,
          },
        },
      })
    );
    console.log("fetching tasks to delete - settings");
    const taskList = taskData.data.listTasks.items;

    for (let task of taskList) {
      const deltask = await API.graphql(
        graphqlOperation(deleteTask, {
          input: {
            id: task.id,
          },
        })
      );
      console.log("deleting user created tasks - settings");
    }
  } catch (err) {
    console.error(err);
  }
};

export default delAllTeamTasks;
