import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function incNum(){
    setnum(num+1)
    console.log(num);
    
  }
  function desNum(){
    setnum(num-1)
    console.log(num);
    

  }
  function jump(){
    setnum(num+5)
    console.log(num);
    
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incNum}>increae</button>
      <button onClick={desNum}>descrease</button>
      <button onClick={jump}>Jump by 5</button>
    </div>
  )
}

export default App