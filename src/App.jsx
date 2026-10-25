import React from 'react'
import Card from './components/card'
const App = () => {
  const user = "megha"
  return (
    <>
    <div className="parent">
      {/* here user is a prop */}
      <Card user="Megha"/> 
      <Card user="neha"/> 
    </div>
    </>
  )
}

export default App