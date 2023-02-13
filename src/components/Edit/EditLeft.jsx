import React from 'react'
import ChatHeader from '../Chat/ChatHeader'
import '../styles/EditLeft.css'

function EditLeft({user}) {
  return (
    <div className='links-container'>
      <div className='left-side'>
        <ChatHeader user={user} />
        <a href="http://localhost:3000/homepage/edituser"><button className='btn-links'>Parametres utulisateurs</button></a>

        <a href="http://localhost:3000/homepage/edituser/editprofil"><button className='btn-links'>Change Info</button></a>
        <a href="http://localhost:3000/homepage/edituser/localisation"><button className='btn-links'>Localisation</button></a>
        <a href=""><button className='btn-links'>Ranger User</button></a>
        <a href=""><button className='btn-links'>Age</button></a>
        <a href=""><button className='btn-links'>Description</button></a>
        <a href=""><button className='btn-links'>Description</button></a>
  
      </div>
    </div>
  )
}

export default EditLeft