import React from 'react'
import ChatHeader from '../ChatHeader'
import '../styles/EditLeft.css'

function EditLeft() {
  return (
    <div className='links-container'>
      <div className='left-side'>
        <ChatHeader />

        <a href="http://localhost:3000/homepage/edituser/editprofil"><button className='btn-links'>Change Info</button></a>
        <a href="http://localhost:3000/homepage/edituser/localisation"><button className='btn-links'>Localisation</button></a>
        <a href=""><button className='btn-links'>Ranger User</button></a>
        <a href=""><button className='btn-links'>Age</button></a>
        <a href=""><button className='btn-links'>Description</button></a>
      </div>
    </div>
  )
}

export default EditLeft