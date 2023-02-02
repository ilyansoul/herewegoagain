import React from 'react'
import ChatDisplay from './ChatDisplay'
import ChatHeader from './ChatHeader'
import MatchesDisplay from './MatchesDisplay'
import './styles/ChatContainer.css';

function ChatContainer() {
  return (
    <div className='chat-container'>
        
   

    <div className='btn-position'>
    <li><a href="http://localhost:3000/homepage/Edituser"><button className='match-btn'>Edit Profile</button></a></li>

    <button className='match-btn'>Matches</button>
    <button className='chat-btn'>Chat</button>
    
    </div>

    <MatchesDisplay/>
    <ChatDisplay/>
    </div>
  )
}

export default ChatContainer