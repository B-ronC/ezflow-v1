/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onCreateTask(filter: $filter, owner: $owner) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onUpdateTask(filter: $filter, owner: $owner) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onDeleteTask(filter: $filter, owner: $owner) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam(
    $filter: ModelSubscriptionTeamFilterInput
    $owner: String
  ) {
    onCreateTeam(filter: $filter, owner: $owner) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam(
    $filter: ModelSubscriptionTeamFilterInput
    $owner: String
  ) {
    onUpdateTeam(filter: $filter, owner: $owner) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam(
    $filter: ModelSubscriptionTeamFilterInput
    $owner: String
  ) {
    onDeleteTeam(filter: $filter, owner: $owner) {
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
export const onCreateUserTeams = /* GraphQL */ `
  subscription OnCreateUserTeams(
    $filter: ModelSubscriptionUserTeamsFilterInput
    $owner: String
  ) {
    onCreateUserTeams(filter: $filter, owner: $owner) {
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
export const onUpdateUserTeams = /* GraphQL */ `
  subscription OnUpdateUserTeams(
    $filter: ModelSubscriptionUserTeamsFilterInput
    $owner: String
  ) {
    onUpdateUserTeams(filter: $filter, owner: $owner) {
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
export const onDeleteUserTeams = /* GraphQL */ `
  subscription OnDeleteUserTeams(
    $filter: ModelSubscriptionUserTeamsFilterInput
    $owner: String
  ) {
    onDeleteUserTeams(filter: $filter, owner: $owner) {
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
export const onCreateUserTasks = /* GraphQL */ `
  subscription OnCreateUserTasks(
    $filter: ModelSubscriptionUserTasksFilterInput
    $owner: String
  ) {
    onCreateUserTasks(filter: $filter, owner: $owner) {
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
export const onUpdateUserTasks = /* GraphQL */ `
  subscription OnUpdateUserTasks(
    $filter: ModelSubscriptionUserTasksFilterInput
    $owner: String
  ) {
    onUpdateUserTasks(filter: $filter, owner: $owner) {
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
export const onDeleteUserTasks = /* GraphQL */ `
  subscription OnDeleteUserTasks(
    $filter: ModelSubscriptionUserTasksFilterInput
    $owner: String
  ) {
    onDeleteUserTasks(filter: $filter, owner: $owner) {
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
