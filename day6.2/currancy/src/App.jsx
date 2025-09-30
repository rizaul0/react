import { useState } from 'react'
import UseCurrancyInfo from './hooks/useCurrancyInfo'
import Input from './components/input'
function App() {
  const [ammount ,setammount] = useState(100)
  const [to ,setto] = useState("inr")
  const [from,setfrom] = useState("usd")
  const options =Object.keys(UseCurrancyInfo)
   
  const swap = ()=>{
    setfrom(to)
    setto(from)
    setammount(ammount) ``
    ammount(setammount)
  }

  return (
    <>
      <Input/ >
    </>
  )
}

export default App
