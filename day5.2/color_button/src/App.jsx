import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
function App() {
  const [col, setCol] = useState("white")
  
  return (
    <>
      <div className='w-full h-screen '
      style={{backgroundColor:col}}>
      </div>
      <div className='fixed flex flex-wrap bg-orange-300 justify-center gap-3 bottom-30  inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center border-2 rounded-xl w-10 ' 
        style={{backgroundColor:"red"}}><button onClick={()=>setCol("red")}>Red</button>
         </div>
        <div className='flex flex-wrap justify-center border-2 rounded-xl w-10 ' 
        style={{backgroundColor:"blue"}}><button onClick={()=>setCol("blue")}>blue</button></div>
        <div className='flex flex-wrap justify-center border-2 rounded-xl w-10 ' 
        style={{backgroundColor:"green"}}><button onClick={()=>setCol("green")}></button></div>
        <div className='flex flex-wrap justify-center border-2 rounded-xl w-10 ' 
        style={{backgroundColor:setCol}}><button></button></div>
        <div className='flex flex-wrap justify-center border-2 rounded-xl w-10 ' 
        style={{backgroundColor:setCol}}><button></button></div>
        <div className='flex flex-wrap justify-center border-2 rounded-xl w-10 ' 
        style={{backgroundColor:setCol}}><button></button></div>
      </div>
    </>
  )
}

export default App
