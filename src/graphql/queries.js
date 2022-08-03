/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserTest = /* GraphQL */ `
  query GetUserTest($id: ID!) {
    getUserTest(id: $id) {
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
      owner
    }
  }
`;
export const listUserTests = /* GraphQL */ `
  query ListUserTests(
    $filter: ModelUserTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        owner
      }
      nextToken
    }
  }
`;
export const getTaskTest = /* GraphQL */ `
  query GetTaskTest($id: ID!) {
    getTaskTest(id: $id) {
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
      taskTestFromId
      taskTestTeamId
      owner
    }
  }
`;
export const listTaskTests = /* GraphQL */ `
  query ListTaskTests(
    $filter: ModelTaskTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        taskTestFromId
        taskTestTeamId
        owner
      }
      nextToken
    }
  }
`;
export const getTeamTest = /* GraphQL */ `
  query GetTeamTest($id: ID!) {
    getTeamTest(id: $id) {
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
export const listTeamTests = /* GraphQL */ `
  query ListTeamTests(
    $filter: ModelTeamTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserTeams = /* GraphQL */ `
  query GetUserTeams($id: ID!) {
    getUserTeams(id: $id) {
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
        owner
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
export const listUserTeams = /* GraphQL */ `
  query ListUserTeams(
    $filter: ModelUserTeamsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userTestID
        teamTestID
        userTest {
          id
          name
          createdAt
          updatedAt
          owner
        }
        teamTest {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserTasks = /* GraphQL */ `
  query GetUserTasks($id: ID!) {
    getUserTasks(id: $id) {
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
        owner
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
export const listUserTasks = /* GraphQL */ `
  query ListUserTasks(
    $filter: ModelUserTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userTestID
        taskTestID
        userTest {
          id
          name
          createdAt
          updatedAt
          owner
        }
        taskTest {
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
