/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserTest = /* GraphQL */ `
  subscription OnCreateUserTest($owner: String) {
    onCreateUserTest(owner: $owner) {
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
export const onUpdateUserTest = /* GraphQL */ `
  subscription OnUpdateUserTest($owner: String) {
    onUpdateUserTest(owner: $owner) {
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
export const onDeleteUserTest = /* GraphQL */ `
  subscription OnDeleteUserTest($owner: String) {
    onDeleteUserTest(owner: $owner) {
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
export const onCreateTaskTest = /* GraphQL */ `
  subscription OnCreateTaskTest($owner: String) {
    onCreateTaskTest(owner: $owner) {
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
export const onUpdateTaskTest = /* GraphQL */ `
  subscription OnUpdateTaskTest($owner: String) {
    onUpdateTaskTest(owner: $owner) {
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
export const onDeleteTaskTest = /* GraphQL */ `
  subscription OnDeleteTaskTest($owner: String) {
    onDeleteTaskTest(owner: $owner) {
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
export const onCreateTeamTest = /* GraphQL */ `
  subscription OnCreateTeamTest($owner: String) {
    onCreateTeamTest(owner: $owner) {
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
export const onUpdateTeamTest = /* GraphQL */ `
  subscription OnUpdateTeamTest($owner: String) {
    onUpdateTeamTest(owner: $owner) {
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
export const onDeleteTeamTest = /* GraphQL */ `
  subscription OnDeleteTeamTest($owner: String) {
    onDeleteTeamTest(owner: $owner) {
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
export const onCreateUserTeams = /* GraphQL */ `
  subscription OnCreateUserTeams($owner: String) {
    onCreateUserTeams(owner: $owner) {
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
export const onUpdateUserTeams = /* GraphQL */ `
  subscription OnUpdateUserTeams($owner: String) {
    onUpdateUserTeams(owner: $owner) {
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
export const onDeleteUserTeams = /* GraphQL */ `
  subscription OnDeleteUserTeams($owner: String) {
    onDeleteUserTeams(owner: $owner) {
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
export const onCreateUserTasks = /* GraphQL */ `
  subscription OnCreateUserTasks($owner: String) {
    onCreateUserTasks(owner: $owner) {
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
export const onUpdateUserTasks = /* GraphQL */ `
  subscription OnUpdateUserTasks($owner: String) {
    onUpdateUserTasks(owner: $owner) {
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
export const onDeleteUserTasks = /* GraphQL */ `
  subscription OnDeleteUserTasks($owner: String) {
    onDeleteUserTasks(owner: $owner) {
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
