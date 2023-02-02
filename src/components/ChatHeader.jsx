import React from 'react'
import './styles/ChatHeader.css';
import  Logo from './logo.png';

function ChatHeader() {
  return (
    <div className='chat-container-header'>
      <div className='img-container'>
          <img className='profile-img' src={Logo} alt="" />
      </div>
      <h3 className='profile'>UserName</h3>
      <i className='log-out-icon'></i>
    </div>
  )
}

export default ChatHeader