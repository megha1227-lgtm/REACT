import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(
    {
      user: "megha",
      age: 24
    }
  )
  const btnClicked = () => {
    console.log("button clicked");
    const newNum = {...num}
    console.log(newNum);
    
    newNum.user ="priya"
    setNum(newNum)
    console.log(newNum);
    
    //setNum work async function 

  }
  return (
    <div>
      <h1>{num.user} , {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App