import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/contact'
import Navbar from './components/navbar'
const App = () => {
  return (

    //browser router // hash router we use this for hide router interactivity // memory router  //static router 
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <h2>This is footer</h2>
    </div>
  )
}

export default App