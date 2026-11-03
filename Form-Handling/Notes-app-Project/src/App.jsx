import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [des, setdes] = useState("")
  const [task, settask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("form sumbit" , title , des);
    const copyTask = [...task]
    
    copyTask.push({title  , des})
    settask(copyTask)
    console.log(copyTask);
    
    settitle("")
    setdes("")
  }

  return (
    <div className="min-h-screen lg:flex bg-black text-white">

      <form
        onSubmit={(e) => {
          submitHandler(e)

        }}
        className="flex flex-col gap-4 p-10 w-full lg:w-1/2"
      >
        <h1>Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Task Heading"
          className="w-full px-5 py-3 rounded-lg bg-pink-400
          text-black placeholder:text-gray-700 outline-none"
          value={title}
          onChange={(e) => {
            settitle(e.target.value)

          }}
        />

        <textarea
          value={des}
          onChange={(e) => {
            setdes(e.target.value)

          }}
          placeholder="Enter Task Description"
          className="w-full h-32 px-5 py-3 rounded-lg
          bg-pink-400 text-black placeholder:text-gray-700
          outline-none resize-none"
        />

        <button
          type="submit"
          className="w-full px-6 py-2 rounded-lg bg-white
          text-black active:bg-black font-medium hover:bg-gray-200 transition"
        >
          Add Note
        </button>
      </form>

      <div className="lg:border-l-2 flex flex-wrap gap-5 p-10 w-full lg:w-1/2">
        <h1 className='font-bold text-3xl'>Your notes</h1>
        <div className="flex items-start justify-start flex-wrap gap-5 mt-5 text-black overflow-auto h-full" >
          {task.map((elm , index)=>{
            return  <div key={index} className="w-40 h-52 p-10 bg-cover rounded-xl bg-[url('https://freepngimg.com/thumb/note/1-2-note-picture.png')]">

              <h1 className='leading-tight text-xl font-bold'>{elm.title}</h1>
              <p className='leading-tight text-xl '>{elm.des}</p>
            </div>

          })}
          </div>
        </div>
      </div>


  )
}

export default App