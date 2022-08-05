/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      teams {
        items {
          id
          userID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tasks {
        items {
          id
          userID
          taskID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      teams {
        items {
          id
          userID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tasks {
        items {
          id
          userID
          taskID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      teams {
        items {
          id
          userID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tasks {
        items {
          id
          userID
          taskID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      teamID
      title
      description
      to {
        items {
          id
          userID
          taskID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      from {
        id
        name
        email
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      team {
        id
        name
        members {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      taskFromId
      taskTeamId
      owner
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      teamID
      title
      description
      to {
        items {
          id
          userID
          taskID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      from {
        id
        name
        email
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      team {
        id
        name
        members {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      taskFromId
      taskTeamId
      owner
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      teamID
      title
      description
      to {
        items {
          id
          userID
          taskID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      from {
        id
        name
        email
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      team {
        id
        name
        members {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      taskFromId
      taskTeamId
      owner
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      members {
        items {
          id
          userID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tasks {
        items {
          id
          teamID
          title
          description
          createdAt
          updatedAt
          taskFromId
          taskTeamId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      members {
        items {
          id
          userID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tasks {
        items {
          id
          teamID
          title
          description
          createdAt
          updatedAt
          taskFromId
          taskTeamId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      members {
        items {
          id
          userID
          teamID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tasks {
        items {
          id
          teamID
          title
          description
          createdAt
          updatedAt
          taskFromId
          taskTeamId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUserTeams = /* GraphQL */ `
  mutation CreateUserTeams(
    $input: CreateUserTeamsInput!
    $condition: ModelUserTeamsConditionInput
  ) {
    createUserTeams(input: $input, condition: $condition) {
      id
      userID
      teamID
      user {
        id
        name
        email
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      team {
        id
        name
        members {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserTeams = /* GraphQL */ `
  mutation UpdateUserTeams(
    $input: UpdateUserTeamsInput!
    $condition: ModelUserTeamsConditionInput
  ) {
    updateUserTeams(input: $input, condition: $condition) {
      id
      userID
      teamID
      user {
        id
        name
        email
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      team {
        id
        name
        members {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserTeams = /* GraphQL */ `
  mutation DeleteUserTeams(
    $input: DeleteUserTeamsInput!
    $condition: ModelUserTeamsConditionInput
  ) {
    deleteUserTeams(input: $input, condition: $condition) {
      id
      userID
      teamID
      user {
        id
        name
        email
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      team {
        id
        name
        members {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUserTasks = /* GraphQL */ `
  mutation CreateUserTasks(
    $input: CreateUserTasksInput!
    $condition: ModelUserTasksConditionInput
  ) {
    createUserTasks(input: $input, condition: $condition) {
      id
      userID
      taskID
      user {
        id
        name
        email
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      task {
        id
        teamID
        title
        description
        to {
          nextToken
        }
        from {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        team {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        taskFromId
        taskTeamId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserTasks = /* GraphQL */ `
  mutation UpdateUserTasks(
    $input: UpdateUserTasksInput!
    $condition: ModelUserTasksConditionInput
  ) {
    updateUserTasks(input: $input, condition: $condition) {
      id
      userID
      taskID
      user {
        id
        name
        email
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      task {
        id
        teamID
        title
        description
        to {
          nextToken
        }
        from {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        team {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        taskFromId
        taskTeamId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserTasks = /* GraphQL */ `
  mutation DeleteUserTasks(
    $input: DeleteUserTasksInput!
    $condition: ModelUserTasksConditionInput
  ) {
    deleteUserTasks(input: $input, condition: $condition) {
      id
      userID
      taskID
      user {
        id
        name
        email
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      task {
        id
        teamID
        title
        description
        to {
          nextToken
        }
        from {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        team {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        taskFromId
        taskTeamId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
