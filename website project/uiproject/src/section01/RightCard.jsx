import React from 'react'

const RightCard = (props) => {
    return (
        <div className='h-full w-80  rounded-4xl shrink-0 overflow-hidden relative'>
            <img src={props.img} alt="" className='h-full w-full  object-cover' />
            <div className="absolute top-0 left-0 h-full w-full  p-8  flex flex-col justify-between ">
                <h1 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl  font-bold'>{props.id+1}</h1>
                <div className="">
                    <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi maxime in laboriosam! Ex, rerum officia?</p>
                    <div className="flex justify-between">

                        <button className='bg-blue-600 text-white font-semibold px-8 py-2 rounded-full'>{props.tage}</button>
                        <button className='bg-blue-600 text-white font-semibold px-3 py-2 rounded-full'><i className='ri-arrow-right-line'></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCard