import React from 'react'
import {useState} from 'react'
import './styles/ChatInput.css';

function ChatInput() {

    const [textArea , setTextAria] = useState(null)
  return (
    <div className='chat-input'>
        <textarea value={textArea} onChange={(e) => setTextAria(e.target.value)}/>
        <button className='btn-submit'>Submit</button>
    </div>
  )
}

export default ChatInput