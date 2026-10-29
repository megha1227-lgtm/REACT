import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightText = (props) => {
  return (
        <div id='right' className='h-full  w-2/3 scrollbar-none p-6 flex flex-nowrap overflow-x-auto gap-3'> 

        {props.user.map(function(elem , index){
          return <RightCard id={index} key={index} img={elem.img} tage={elem.tag}/> 
        })}
        </div>

  )
}

export default RightText