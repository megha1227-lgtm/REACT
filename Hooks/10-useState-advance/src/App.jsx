import React, { useState } from 'react'

const App = () => {
  // const [num, setNum] = useState(
  //   {
  //     user: "megha",
  //     age: 24
  //   }
  // )
  // const btnClicked = () => {
  //   console.log("button clicked");
  //   setNum(perv=>({...perv, age:60}))
  //   //setNum work async function 

  // }

  const [num, setNum] = useState(10)
  const btnClicked = ()=>{
    console.log("megha");
    // setnum(num+1)
    // setnum(num+1)
    // setnum(num+1)
    setNum(perv=>(perv+1))
    setNum(perv=>(perv+1))
    setNum(perv=>(perv+1))

  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App