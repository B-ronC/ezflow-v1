import './member.css'
import React from 'react';

function Member({ member }) {
  return (
    <div className='member'>
        <div className='name'>
            {member.name}
        </div>
        <div className='email'>
            {member.email}
        </div>
        <button className='assignBtn'>Assign Task</button>
        <button className='removeBtn'>Remove</button>
    </div>
  )
}

export default Member