import React from 'react'
import { ipad } from '../utils'

const Sight = ({bgImg, headText, subText, bgColor, title, color, button}) => {
  return (
    <section className="flex items-center justify-center ">
      <div className={`bg-${bgColor} z-20 bg-cover items-center flex justify-center relative`}>
          <div className='flex-col flex   items-center relative'>
            <div className="absolute top-32">
             <p className='text-center text-3xl font-semibold my-2 max-md:text-2xl'>{subText ? subText : ''}</p>
             <p className='text-center text-6xl font-semibold mb-4 max-md:text-3xl whitespace-nowrap '>{headText ? headText : ''}</p>
             
             
            </div> 
             <img src={bgImg} className="w-screen min-h-screen shrink-0"/>

         {button ? <div className='flex gap-2 bottom-20 absolute'>
         <p className="px-5 py-2 rounded-3xl bg-blue hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue ">Learn more</p>
         <button className="px-5 py-2 rounded-3xl bg-blue  hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue">Buy</button>
        </div> : ''}
       {button ? <p className='leading-8 text-md flex gap-2 bottom-12 absolute text-blue whitespace-nowrap'>{title}</p> : ''}
            <div
        id="cta"
        className="flex flex-col items-center justify-center translate-y-96 "
      >
      </div>
      </div>
            
      </div>
</section>
  )
}

export default Sight