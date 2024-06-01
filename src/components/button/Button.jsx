import React from 'react'

function Button() {
    return (
        <div>
            <div className="flex gap-3 ">
                <div className="btn1 w-36 h-10 bg-yellow-300 text-black font-bold text-[14px] flex justify-center items-center rounded-xl  hover:scale-90 transition-all delay-100  ">Learn More</div>
                <div className="btn1 w-36 h-10 bg-black text-white font-bold text-[14px] flex justify-center items-center rounded-xl hover:scale-90 transition-all delay-100   ">Book a Demo</div>

                
            </div>
        </div>
    )
}

export default Button