import React from 'react';
import { useState } from 'react';
import './Base.css'

const Base = ({ socket, roomId, username }) => {
  const [newMessage, setNewMessage] = useState("")
  const sendMessage = async(e) => {
    e.preventDefault();
    if (newMessage !== "") {
      const messageData ={
        room: roomId,
        author: username,
        message: newMessage,
        time: new Date(Date.now()).getHours() % 12 +":"+ new Date(Date.now()).getMinutes() +" "+(new Date(Date.now()).getHours() < 12 ? "AM": "PM")
      }
      await socket.emit("send_message", messageData);
    }
    setNewMessage("")
  }
  return (
    <div className='base'>
      <div >
        <form className='msg-box' >
          <input className='input' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder='Message...'></input>
          <button className='btn' onClick={sendMessage} ><i class="fa-sharp fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  )
}

export default Base