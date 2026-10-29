import React from 'react'

const App = () => {
  const btn = ()=>{
    console.log("this is btn clicked");
    button
    
  }
  const input = (elm)=>{
    const inputValue = elm.target.value
    const h1 = document.createElement('h1')
    const body = document.querySelector('body')
    h1.textContent = inputValue
    console.log(inputValue);
    body.appendChild(h1)
  }
  return (
    <div>
      <h1>Hello , Megha</h1>
      <button onClick={btn}>Change USer</button>

      <button onClick={function(){
        console.log("hello");
        
      }}>hello</button>
      <input type="text" name='name' placeholder='Enter your name' onChange={input}/>
    </div>
  )
}

export default App