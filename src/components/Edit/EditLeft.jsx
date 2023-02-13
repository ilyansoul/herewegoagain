import React from 'react'
import ChatHeader from '../Chat/ChatHeader'
import '../styles/EditLeft.css'

function EditLeft({user}) {
  return (
    <div className='links-container'>
      <div className='left-side'>
        <ChatHeader user={user} />

        <a href="http://localhost:3000/homepage/editprofil"><button className='btn-links'>Modifier Informations</button></a>
        <a href="http://localhost:3000/homepage/localisation"><button className='btn-links'>Localisation</button></a>
        <a href=""><button className='btn-links'>Distance utulisateurs</button></a>
      
  
      </div>
    </div>
  )
}

export default EditLeft