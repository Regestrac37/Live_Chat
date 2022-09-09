import React from 'react'
import './Home.css'
import Base from './Base'
import ChatBox from './ChatBox'
import Header from './Header'
import Form from './Form'

const Home = () => {
  return (
    <div className='home'>
      <div>
        <div className='head-div'>
        <Header />
        </div>
        <div className='main'>
        <ChatBox />
        <Base />
        </div>
        <div className='form-div'>
        <Form />
        </div>
      </div>
    </div>
  )
}

export default Home