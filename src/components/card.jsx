import React from 'react'

const card = (user) => {
  console.log(user);
  
  return (

    
    <div className="card">
        <h1>{user.user}</h1>
        <img src="https://plus.unsplash.com/premium_photo-1792244575493-b11291f80b02?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, itaque.</p>
        <button>View PRofile</button>
    </div>
  )
}

export default card