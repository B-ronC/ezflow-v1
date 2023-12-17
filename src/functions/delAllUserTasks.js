import { API, graphqlOperation } from "aws-amplify";
import { listTasks, listUserTasks } from "../graphql/queries";
import { deleteUserTasks, deleteTask } from "../graphql/mutations";

// deletes all tasks connected to user
const delAllUserTasks = async (currTeamID, userID) => {
  try {
    const userTaskData = await API.graphql(graphqlOperation(listUserTasks));
    console.log("fetching user tasks to delete - settings");
    const userTaskList = userTaskData.data.listUserTasks.items.filter(
      (userTask) => {
        return (
          userTask.task.teamID === currTeamID &&
          (userTask.userID === userID || userTask.task.from === userID)
        );
      }
    );

    for (let userTask of userTaskList) {
      await API.graphql(
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
    const taskList = taskData.data.listTasks.items.filter((task) => {
      return task.from === userID || task.toID === userID;
    });

    for (let task of taskList) {
      await API.graphql(
        graphqlOperation(deleteTask, {
          input: {
            id: task.id,
          },
        })
      );
      console.log("deleting tasks - settings");
    }
  } catch (err) {
    console.error(err);
  }
};

export default delAllUserTasks;
