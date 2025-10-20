import React from 'react'
import logo from '../assets/react.svg'   // adjust path as needed

function Logo({ width = '30px' }) {
  return (
    <img 
      src={logo} 
      alt="App Logo" 
      style={{ width }} 
      className="rounded-lg" 
    />
  )
}

export default Logo
