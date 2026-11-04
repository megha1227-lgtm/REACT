import React, { use, useEffect, useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  useEffect(()=>{
    console.log("hello use effect is runing");
    
  },[num])
  return (
    <div>
      <h1>Value of is{num}</h1>
      <h1>Value of is{num2}</h1>
      <button onClick={()=>{
        setnum(num+1)
        setnum2(num2+10)
      }}>Click me</button>
    </div>
  )
}

export default App