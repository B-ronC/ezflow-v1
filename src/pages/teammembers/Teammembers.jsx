import './teammembers.css'
import React from 'react'
import Teamnavbar from '../../components/teamnavbar/Teamnavbar'
import { useParams } from 'react-router-dom'

export const idContext2 = React.createContext()

export default function Teammembers() {
  const { id } = useParams()

  return (
    <div className='Teammembers'>
      <idContext2.Provider value={id}>
        <Teamnavbar />
      </idContext2.Provider>
      <h3>Teammembers</h3>
    </div>
  )
}
