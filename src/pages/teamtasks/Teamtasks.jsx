import './teamtasks.css'
import React from 'react'
import Teamnavbar from '../../components/teamnavbar/Teamnavbar'
import { useParams } from 'react-router-dom'

export const idContext1 = React.createContext()

export default function Teamtasks() {
  const { id } = useParams()

  return (
    <div className='Teamtasks'>
      <idContext1.Provider value={ id }>
        <Teamnavbar />
      </idContext1.Provider>
      <h3>Teamtasks</h3>
    </div>
  )
}
