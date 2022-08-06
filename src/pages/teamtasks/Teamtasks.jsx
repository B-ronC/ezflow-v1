import './teamtasks.css';
import React from 'react';
import Teamnavbar from '../../components/teamnavbar/Teamnavbar';
import { useParams } from 'react-router-dom';

export const teamIDContextTask = React.createContext()

function Teamtasks() {
  const { currTeamID } = useParams()

  return (
    <div className='Teamtasks'>
      <teamIDContextTask.Provider value={ currTeamID }>
        <Teamnavbar />
      </teamIDContextTask.Provider>
      <h3>Team Tasks</h3>
    </div>
  )
}

export default Teamtasks
