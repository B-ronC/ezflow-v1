import './teamtasks.css';
import React from 'react';
import Teamnavbar from '../../components/teamnavbar/Teamnavbar';
import { useParams } from 'react-router-dom';

export const idContextTask = React.createContext()

function Teamtasks() {
  const { id } = useParams()

  return (
    <div className='Teamtasks'>
      <idContextTask.Provider value={ id }>
        <Teamnavbar />
      </idContextTask.Provider>
      <h3>Team Tasks</h3>
    </div>
  )
}

export default Teamtasks
