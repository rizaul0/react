import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let  [count, setCount] = useState(15)
  
  const  addValue = ()=> {
    if (count<20)
    setCount(count+1)
  }
   const  remove = ()=> {
    if (count>0)
    setCount(count-1)
  }

  

  


  return (
    <>
     <h1 className='bg-green-500'>simple counter </h1>
     <h2>counter value : {count}</h2>
     <button onClick={addValue}>add</button>
     <button onClick={remove}>remove</button>
    </>
  )
}

export default App
