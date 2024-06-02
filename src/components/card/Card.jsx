import React from 'react'

function Card() {
    return (
        <div className='flex  justify-center items-center gap-5 h-[300px]'>
            <div className="bg-red-600 w-[23%] h-72 flex flex-col justify-start gap-7 p-10 items-center rounded-xl   ">
                <div className=" bg-yellow-300 w-full flex justify-start text-xl"><p>Learn HTML</p></div>
                <div className=""><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, aspernatur!lorme5 Lorem ipsum dolor sit amet.</p></div>
                <div className="flex justify-between border-t-2 border-black border-dashed  w-full">
                    <p>Beginner </p>
                    <p>Lesson</p>
                </div>
            </div>
            <div className="bg-red-600 w-[23%] h-72 flex flex-col justify-start gap-7 p-10 items-center rounded-xl ">
                <div className=" bg-yellow-300 w-full flex justify-start text-xl"><p>Learn CSS</p></div>
                <div className=""><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, aspernatur!lorme5 Lorem ipsum dolor sit amet.</p></div>
                <div className="flex justify-between border-t-2 border-black border-dashed  w-full">
                    <p>Beginner </p>
                    <p>Lesson</p>
                </div>
            </div>
            <div className="bg-red-600 w-[23%] h-72 flex flex-col justify-start gap-7 p-10 items-center rounded-xl ">
                <div className=" bg-yellow-300 w-full flex justify-start text-xl"><p>Responsive Web Design</p></div>
                <div className=""><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, aspernatur!lorme5 Lorem ipsum dolor sit amet.</p></div>
                <div className="flex justify-between  items-center border-t-2 border-black border-dashed  w-full">
                    <p>Beginner </p>
                    <p>Lesson</p>
                </div>
            </div>
        </div>
    )
}

export default Card