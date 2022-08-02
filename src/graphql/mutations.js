/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserTest = /* GraphQL */ `
  mutation CreateUserTest(
    $input: CreateUserTestInput!
    $condition: ModelUserTestConditionInput
  ) {
    createUserTest(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          userTestID
          teamTestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tasks {
        items {
          id
          userTestID
          taskTestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserTest = /* GraphQL */ `
  mutation UpdateUserTest(
    $input: UpdateUserTestInput!
    $condition: ModelUserTestConditionInput
  ) {
    updateUserTest(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          userTestID
          teamTestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tasks {
        items {
          id
          userTestID
          taskTestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserTest = /* GraphQL */ `
  mutation DeleteUserTest(
    $input: DeleteUserTestInput!
    $condition: ModelUserTestConditionInput
  ) {
    deleteUserTest(input: $input, condition: $condition) {
      id
      name
      teams {
        items {
          id
          userTestID
          teamTestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tasks {
        items {
          id
          userTestID
          taskTestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTaskTest = /* GraphQL */ `
  mutation CreateTaskTest(
    $input: CreateTaskTestInput!
    $condition: ModelTaskTestConditionInput
  ) {
    createTaskTest(input: $input, condition: $condition) {
      id
      teamID
      title
      description
      to {
        items {
          id
          userTestID
          taskTestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      from {
        id
        name
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
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
      taskTestFromId
      taskTestTeamId
      owner
    }
  }
`;
export const updateTaskTest = /* GraphQL */ `
  mutation UpdateTaskTest(
    $input: UpdateTaskTestInput!
    $condition: ModelTaskTestConditionInput
  ) {
    updateTaskTest(input: $input, condition: $condition) {
      id
      teamID
      title
      description
      to {
        items {
          id
          userTestID
          taskTestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      from {
        id
        name
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
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
      taskTestFromId
      taskTestTeamId
      owner
    }
  }
`;
export const deleteTaskTest = /* GraphQL */ `
  mutation DeleteTaskTest(
    $input: DeleteTaskTestInput!
    $condition: ModelTaskTestConditionInput
  ) {
    deleteTaskTest(input: $input, condition: $condition) {
      id
      teamID
      title
      description
      to {
        items {
          id
          userTestID
          taskTestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      from {
        id
        name
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
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
      taskTestFromId
      taskTestTeamId
      owner
    }
  }
`;
export const createTeamTest = /* GraphQL */ `
  mutation CreateTeamTest(
    $input: CreateTeamTestInput!
    $condition: ModelTeamTestConditionInput
  ) {
    createTeamTest(input: $input, condition: $condition) {
      id
      name
      members {
        items {
          id
          userTestID
          teamTestID
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
          taskTestFromId
          taskTestTeamId
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
export const updateTeamTest = /* GraphQL */ `
  mutation UpdateTeamTest(
    $input: UpdateTeamTestInput!
    $condition: ModelTeamTestConditionInput
  ) {
    updateTeamTest(input: $input, condition: $condition) {
      id
      name
      members {
        items {
          id
          userTestID
          teamTestID
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
          taskTestFromId
          taskTestTeamId
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
export const deleteTeamTest = /* GraphQL */ `
  mutation DeleteTeamTest(
    $input: DeleteTeamTestInput!
    $condition: ModelTeamTestConditionInput
  ) {
    deleteTeamTest(input: $input, condition: $condition) {
      id
      name
      members {
        items {
          id
          userTestID
          teamTestID
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
          taskTestFromId
          taskTestTeamId
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
      userTestID
      teamTestID
      userTest {
        id
        name
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamTest {
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
      userTestID
      teamTestID
      userTest {
        id
        name
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamTest {
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
      userTestID
      teamTestID
      userTest {
        id
        name
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamTest {
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
      userTestID
      taskTestID
      userTest {
        id
        name
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      taskTest {
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
          createdAt
          updatedAt
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
        taskTestFromId
        taskTestTeamId
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
      userTestID
      taskTestID
      userTest {
        id
        name
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      taskTest {
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
          createdAt
          updatedAt
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
        taskTestFromId
        taskTestTeamId
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
      userTestID
      taskTestID
      userTest {
        id
        name
        teams {
          nextToken
        }
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      taskTest {
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
          createdAt
          updatedAt
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
        taskTestFromId
        taskTestTeamId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
