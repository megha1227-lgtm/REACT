import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='py-3 px-18 h-[90vh]  flex gap-10 items-center'>
        <LeftText />
        <RightText user={props.user} />
    </div>
  )
}

export default Page1Content