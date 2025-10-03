import { useState } from 'react'
import Login from './Login'
// import './App.css'
import Profile from './Profile'
import Contextprovider from './context/Contextprovider'
function App() {
  

  return (
    <Contextprovider >
      <h1 className='text-5xl'>react code</h1>
     <Login />
     <Profile />
    </Contextprovider>
  )
}

export default App
