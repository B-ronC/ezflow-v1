/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
      from
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        title
        description
        to {
          nextToken
        }
        from
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
          from
          status
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const listUserTeams = /* GraphQL */ `
  query ListUserTeams(
    $filter: ModelUserTeamsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        teamID
        user {
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
        from
        status
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
export const listUserTasks = /* GraphQL */ `
  query ListUserTasks(
    $filter: ModelUserTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        taskID
        user {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        task {
          id
          teamID
          title
          description
          from
          status
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
