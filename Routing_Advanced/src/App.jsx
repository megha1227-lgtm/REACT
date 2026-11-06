import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<}></Route>
      </Routes>
    </div>
  )
}

export default App