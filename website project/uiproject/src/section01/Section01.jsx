import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section01 = (props) => {
  return (
    <div className='h-full w-full'>

        <Navbar />
        <Page1Content user= {props.user} />
    </div>
  )
}

export default Section01