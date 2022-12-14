import React from 'react'
import './Home.css'
import Base from './Base'
import ChatBox from './ChatBox'
import Header from './Header'
import Form from './Form'
import { useState } from 'react'
import io from "socket.io-client"

const socket = io.connect("https://live-chat-custom-rooms.herokuapp.com");

const Home = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [username, setUsername] = useState("")
  const [roomId, setRoomId] = useState("")
  const [messageList, setMessageList] = useState([])

  return (
    <div className='home'>
      <div>
        <div className='head-div'>
          <Header roomId={roomId} />
        </div>
        <div className={!isAuth && "blur"} >
          <ChatBox socket={socket} setMessageList={setMessageList} messageList={messageList} username={username} />
          <Base socket={socket} roomId={roomId} username={username} setMessageList={setMessageList} />
        </div>
        {!isAuth &&
          <div className='form-div'>
            <Form setIsAuth={setIsAuth} setUsername={setUsername} setRoomId={setRoomId} socket={socket} username={username} />
          </div>}
      </div>
    </div>
  )
}

export default Home