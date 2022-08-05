import './teammembers.css';
import React, { useState, useEffect } from 'react';
import Teamnavbar from '../../components/teamnavbar/Teamnavbar';
import Searchbar from '../../components/searchbar/Searchbar';

import { API, graphqlOperation } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import { listUsers, listUserTeams } from '../../graphql/queries';

export const idContextMem = React.createContext()

function Teammembers() {
  const { id } = useParams()

  const [userList, setUserList] = useState([]) 
  const [memberList, setMemberList] = useState([]) 

  // fetches user list for search bar
  function updateUsers() {
    try {
      const fetchUsers = async () => {
        const UserObjectList = await API.graphql(graphqlOperation(listUsers))
        console.log('fetching users')
        const UserItemList = UserObjectList.data.listUsers.items
    
        return UserItemList
      }
      fetchUsers().then(users => setUserList(users))
    } catch (err) {
      console.error(err)
    }
  }

  // updates member list for members page
  function updateMembers() {
    try {
      const fetchUsers = async () => {
        const teamObject = await API.graphql(graphqlOperation(listUserTeams, {
          filter: {
              teamID: {
                  eq: id
              }
          }
        }))
        console.log('fetching members')
        const teamItem = teamObject.data.listUserTeams.items
        
        return teamItem
      }
      fetchUsers().then(users => setMemberList(users))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    updateUsers()
    updateMembers()
  }, [])

  return (
    <div className='Teammembers'>
      <idContextMem.Provider value={id}>
        <Teamnavbar />
        <Searchbar placeholder={'Search user...'} data={userList}/>
      </idContextMem.Provider>
      <h3>Members:</h3>
      {memberList.sort(function(a, b){
        if(a.user.name < b.user.name) { return -1; }
        if(a.user.name > b.user.name) { return 1; }
        return 0;
        }).map(user => {
          return (
            <h3 key={user.user.id}>{user.user.name}</h3>
          )
      })}
    </div>
  )
}

export default Teammembers
