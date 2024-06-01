import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import Home from './components/header/Home'
import './App.css'
import ContactUs from './components/header/ContactUs'
import AboutUs from './components/header/AboutUs'
import Catalog from './components/header/Catalog'
import Button from './components/button/Button'
import Code from './components/code/Code'


function App() {


  return (
    <>
      <div className="font-semibold font-mono ">


        <div className="Navbar bg-gray-950 text-white flex justify-between items-center h-10 w-full px-16 ">

          <div className=" text-2xl ">StudyZone</div>

          <div className="flex gap-10 ">
            <NavLink to='/home' >Home</NavLink>
            <NavLink to='/Catalog' >Catalog</NavLink>
            <NavLink to='/AboutUs' >AboutUs</NavLink>
            <NavLink to='/ContactUs' >ContactUs</NavLink>
          </div>

          <div className=" flex gap-x-10">
            <input type="search" name="" id="" className='text-black px-4 rounded-lg border-gray-900' />
            <p>Cart</p>
            <p>Login </p>
          </div>

        </div>

        <div className="bg-gray-900 flex justify-center items-center flex-col text-white gap-6 pb-10">

          <div className="flex justify-center items-center  pt-7">
            <div className=" h-10 w-[244px] bg-red-400 rounded-xl flex justify-center items-center ">Become an Instructor</div>
          </div>
          <div className="text-3xl text-white">Empower Yours Future With <span className='text-cyan-400'> Coding Skills </span> </div>
          <div className="bg-gray-900 w-[50%] flex justify-center items-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum expedita voluptatum necessitatibus quas corporis explicabo dolorem molestias cupiditate odio. Ea!</div>

          <div className="">
            <Button />
          </div>

        </div>
        <div className=" bg-gray-900 py-2 flex justify-center items-center ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VEN308CJcAagduojX_0Ysw7HRIhWnEFP9Q&s" className='h-[311px]' alt="video" srcset="" />
        </div>

        <div className="">
          <Code/>
        </div>


        <Routes path="/">
          <Route path='home' element={<Home />} />
          <Route path='Catalog' element={<Catalog />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='ContactUs' element={<ContactUs />} />
        </Routes>


      </div >
    </>
  )
}

export default App
