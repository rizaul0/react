import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(15)
  // let counter =15
  const addValue = () => {
    if (counter >= 20) {
      setcounter(20)
    }
    else {
      setcounter(counter + 1)

    }

  }
  const remove = () => {
    if (counter <= 0) {
      setcounter(0)
    }
    else {
      setcounter(counter - 1)

    }
  }

  return (
    <>
      <h1>simple counter</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value  </button>
      <br />
      <button onClick={remove}>remove value</button>
    </>
  )
}

export default App
