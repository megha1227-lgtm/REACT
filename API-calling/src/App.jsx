import React from 'react'
import axios from 'axios'
import { useState } from 'react'
//api calling  
// two method to call api , fetch and 
const App = () => {
  // const getData = async()=>{
  //  const res =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(res);
    
  // }

  // const geet= async()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  //   const data = await response.json()
  //   console.log(data);
    
  // }

  // const getDataWithTheHelpOfAxios = async()=>{
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(data);
        
  // }

  const [data, setdata] = useState([])
  const getDataWithTheHelpOfAxios = async()=>{
    const res =  await axios.get('https://picsum.photos/v2/list')
    console.log(res);
    setdata(res.data)
        
  }
  return (
    <div>
      <div className="">
        {data.map((elm , ind)=>{
          return <h1>Hello{elm.author}{ind}</h1>
        })}
      </div>
      <button onClick={getDataWithTheHelpOfAxios}>Get Data</button>
      </div>
  )
}

export default App