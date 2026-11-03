import React, { useState } from 'react'

const App = () => {

  //this call two way data binding
  const [title, settitle] = useState('')
  const submitHandling = (det)=>{
    // det.preventDefault()
    console.log("form submit ...." , title);
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(de)=>{
        de.preventDefault()
        submitHandling()
      }}>
        <input type="text"
        placeholder='Enter your title'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
          console.log(title);
          
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App