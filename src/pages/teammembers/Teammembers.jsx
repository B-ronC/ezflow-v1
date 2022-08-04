import './teammembers.css'
import React from 'react'
import Teamnavbar from '../../components/teamnavbar/Teamnavbar'
import { useParams } from 'react-router-dom'

export const idContextMem = React.createContext()

export default function Teammembers() {
  const { id } = useParams()

  return (
    <div className='Teammembers'>
      <idContextMem.Provider value={id}>
        <Teamnavbar />
      </idContextMem.Provider>
      <h3>Teammembers</h3>
    </div>
  )
}
