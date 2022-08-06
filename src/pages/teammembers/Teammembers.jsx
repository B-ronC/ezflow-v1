import './teammembers.css';
import React, { useState, useEffect } from 'react';
import Teamnavbar from '../../components/teamnavbar/Teamnavbar';
import Searchbar from '../../components/searchbar/Searchbar';
import Member from '../../components/member/Member';

import { API, graphqlOperation } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import { listUsers, listUserTeams } from '../../graphql/queries';

export const teamIDContextMem = React.createContext()
export const memListContext = React.createContext()

function Teammembers() {
  const { currTeamID } = useParams()

  const [userList, setUserList] = useState([]) 
  const [memberList, setMemberList] = useState([]) 

  // fetches user list for search bar
  function updateUsers() {
    try {
      const fetchUsers = async () => {
        const userData = await API.graphql(graphqlOperation(listUsers))
        console.log('fetching users for search bar - members')
        const userList = userData.data.listUsers.items
    
        return userList
      }
      fetchUsers().then(userList => setUserList(userList))
    } catch (err) {
      console.error(err)
    }
  }

  // updates member list for members page
  function updateMembers() {
    try {
      const fetchUsers = async () => {
        const userTeamData = await API.graphql(graphqlOperation(listUserTeams, {
          filter: {
              teamID: {
                  eq: currTeamID
              }
          }
        }))
        console.log('fetching members - members')
        const userTeamList = userTeamData.data.listUserTeams.items
        
        return userTeamList
      }
      fetchUsers().then(userTeamList => setMemberList(userTeamList))
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
      <teamIDContextMem.Provider value={ currTeamID }>
        <Teamnavbar />
        <memListContext.Provider value={ memberList }>
          <Searchbar placeholder={'Search user...'} data={ userList }/>
        </memListContext.Provider>
      </teamIDContextMem.Provider>
      <h3>Members:</h3>
      {memberList.sort(function(a, b){
        if(a.user.name < b.user.name) { return -1; }
        if(a.user.name > b.user.name) { return 1; }
        return 0;
        }).map(member => {
          return (
            <Member key={member.user.id} member={member.user} />
          )
      })}
    </div>
  )
}

export default Teammembers
