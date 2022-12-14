import React, { useEffect } from 'react'
import './ChatBox.css'
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatBox = ({ socket, setMessageList, messageList, username }) => {
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data])
    })
  }, [socket]);
  return (
    <div >
        <ScrollToBottom className='chat-box'>
        {messageList.map((messageContent, index) => {
          return (
            <div key={index} id={username === messageContent.author ? "you" : "other"}>
            <div className='chats' >
              <div className='user-name'>{messageContent.author}</div>
              <div className='chat-text'>{messageContent.message}</div>
              <div className='chat-time'>{messageContent.time}</div>
            </div >
            </div>
          )
        })}
        </ScrollToBottom>
    </div>
  )
}

export default ChatBox