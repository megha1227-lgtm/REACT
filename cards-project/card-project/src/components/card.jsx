import React from 'react'
import  {Bookmark}  from 'lucide-react'
const Card = () => {
    return (
        
            <div className='card'>
                <div className="top">
                    <img src="https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg" alt="" />
                    <button>Save <Bookmark size={12}  /></button>
                </div>
                <div className="center">
                    <h3>Amazon <span>5Days Ago</span></h3>
                    <h2>Senior UI/UX Desginer</h2>
                    <div className='tag'>
                        <h4>Part Time</h4>
                        <h4>Senior Level</h4>
                    </div>
                </div>
                <div className="bottom">
                    
                        <div>
                            <h3>Doller 120/perHour</h3>
                            <p>Mumbai ,India</p>
                        </div>
                    <button>Apply Now</button>
                </div>
            </div>
        
    )
}

export default Card