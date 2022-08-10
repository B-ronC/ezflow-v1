/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
  subscription OnCreateTask($owner: String) {
    onCreateTask(owner: $owner) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($owner: String) {
    onUpdateTask(owner: $owner) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($owner: String) {
    onDeleteTask(owner: $owner) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($owner: String) {
    onCreateTeam(owner: $owner) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($owner: String) {
    onUpdateTeam(owner: $owner) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($owner: String) {
    onDeleteTeam(owner: $owner) {
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
export const onCreateUserTeams = /* GraphQL */ `
  subscription OnCreateUserTeams($owner: String) {
    onCreateUserTeams(owner: $owner) {
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
  subscription OnUpdateUserTeams($owner: String) {
    onUpdateUserTeams(owner: $owner) {
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
  subscription OnDeleteUserTeams($owner: String) {
    onDeleteUserTeams(owner: $owner) {
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
  subscription OnCreateUserTasks($owner: String) {
    onCreateUserTasks(owner: $owner) {
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
export const onUpdateUserTasks = /* GraphQL */ `
  subscription OnUpdateUserTasks($owner: String) {
    onUpdateUserTasks(owner: $owner) {
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
export const onDeleteUserTasks = /* GraphQL */ `
  subscription OnDeleteUserTasks($owner: String) {
    onDeleteUserTasks(owner: $owner) {
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
