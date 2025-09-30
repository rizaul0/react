import { useCallback, useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [Length, setLength] = useState(10)
  const [num_allowed, set_num_allowed] = useState(false)
  const [car_allowed, set_car_allowed] = useState(false)
  const [pass, set_pass] = useState("")

  const password_gen = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (num_allowed) str += "1234567890"
      if (car_allowed) str += "!@#$%^&*();[]{}<>?/~`"

      for (let i = 0; i < Length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      set_pass(pass)


    },
    [Length, num_allowed, car_allowed, set_pass])

useEffect(()=>{password_gen()},[Length,car_allowed,num_allowed,password_gen])
  return (
    <>
      

      <div className='w-full  max-w-md mx-auto rounded-lg px-4 border-amber-50 pt-4 my-8 py-4 bg-gray-500'>
        <h1 className='text-4xl text-center text-white py-2'>Password genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white  '>
          <input
            type="text"
            value={pass}
            readOnly
            // placeholder='password'
            className='online-none w-full py-1 px-3 '
          />
          <button
          onClick={()=>{navigator.clipboard.writeText(pass).then(()=>{alert("copied")})}}
          className=' px-4  bg-orange-600'>Copy</button>
        </div>
        <input 
        type="range"
        id='len'
        value={Length} 
        min={1} max={30}  
        onChange={(e)=>{setLength(e.target.value)}}
         className='w-25 cursor-pointer'/>
         <label htmlFor="len" className='mx-2 '>Length {Length}</label>

         <input 
         type="checkbox" 
         id='num' 
         className='mx-2'
         defaultChecked={num_allowed} 
         onChange={(e)=>set_num_allowed(prev=>!prev)}/>
         <label htmlFor="num">Number</label>
         <input defaultChecked={car_allowed} 
         onChange={(e)=>{set_car_allowed(prev=>!prev)}}
         type="checkbox" id='chr' className='mx-2'/>
         <label htmlFor="car">SP-CHAR</label>
      </div>
    </>
  )
}

export default App
