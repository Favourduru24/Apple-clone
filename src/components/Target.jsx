import { Apple } from '../constants'
import { framer } from '../utils'
import { light } from '../utils'
import {Link } from 'react-router-dom'

import { useState } from "react"
// import Sidebar from "./Sidebar"

import Sight from './Sight'

const Target = () => {

   
  return (
   
   
   
    <section className=' mb-80' >
       <Link to="/">
        <Sight 
        bgImg={framer}
        headText="iPhone 16 Pro"
        subText="Hello, Apple Intelligence "
        />
        </Link>
        <Link to='/products'>
        <Sight 
        bgImg={light}
        bgColor="blue"
        />
        </Link>
    </section>

  //   <section className="max-h-[50rem] justify-normal flex flex-col">
  //     <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto bg-zinc ">
  //   <Sidebar/>
  //   <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2 px-5 ">
  //  <Hey title="testing1"/>
  //  <Hey title="testing2"/>
  //  <Hey title="testing3"/>
  //  <Hey title="testing4"/>
  //  <Hey title="testing5"/>
  //  <Hey title="testing6"/>
  //  <Hey title="testing7"/>
  //  <Hey title="testing8"/>
  //  <Hey title="testing9"/>
  //  <Hey title="testing10"/>
  //  <Hey title="testing11"/>
  //  <Hey title="testing12"/>
  //  <Hey title="testing13"/>
  //  <Hey title="testing14"/>
  //  <Hey title="testing15"/>
  //  <Hey title="testing16"/>
  //   </div>
  //   </div>
  //   </section>































  //  <section className="mb-[40rem] bg-red-400 flex items-center justify-center relative" >
  //      <div className=" my-40">
  //       <button className="p-4 bg-black text-white rounded-lg font-bold"
  //        onClick={handleClick}
  //       >Open Modal</button>
  //      </div>
  //        { open &&  
  //      <div className="absolute top-0 w-[40rem] bg-white h-[30rem]  rounded-lg shadow-lg shadow-white cursor-default z-20 my-20 flex  ">
  //       <div className="text-black text-2xl absolute right-3 bg-red-300 m-2 px-2 rounded-sm flex text-center z-30 cursor-pointer" onClick={handleClick}>x</div>
   
  //       <div className="w-1/2"></div>
  //       <div></div>
  //      </div> }
  //  </section>
  )
}

export default Target