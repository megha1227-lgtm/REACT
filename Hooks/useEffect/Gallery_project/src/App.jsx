import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [userData, setUserData] = useState([])
  const getData = async()=>{
    const data = await  axios.get('https://picsum.photos/v2/list?page=2&limit=14')
    console.log(data.data);
    setUserData(data.data)
  }

  useEffect(()=>{
    getData()
  }, [])

  let printUserData = "invalid user"
  if(userData.length >0){
    printUserData = userData.map((elm)=>{
      return <div>
        <img src={elm.download_url} alt="" />
      </div>
    })
  }
  return (
    <div>
      <div className="bg-black h-screen text-white m">
        {/* <button className="bg-green-600 active:scale-95 text-white px-5 py-2 rounded m-10" onClick={()=>{
          getData()
        }}>Get data </button> */}
        <div className="flex flex-wrap gap">
          {printUserData}
        </div>
      </div>
      
    </div>
  )
}

export default App