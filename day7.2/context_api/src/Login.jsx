import React ,{useContext,useState}from 'react'
import Contextprovider from './context/Contextprovider'
import Usercontext from './context/Usercontext'


function Login() {
    const [username , Setusername] = useState("")
    const [password , setpassword] = useState("")
    const {setUser} =useContext(Usercontext)
   
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={username}
        onChange={(e)=>{Setusername(e.target.value)}}/>
        <input type="Password" placeholder='password'value={password}
         onChange={(e)=>{setpassword(e.target.value)}}/>
        <button onClick={handleSubmit}>Login</button>

    </div>
  )
}

export default Login