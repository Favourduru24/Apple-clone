import React from 'react'
import { Apple } from '../constants'
import { blueImg, framer } from '../utils'

const Sight = ({bgImg, headText, subText, bgColor}) => {
  return (
    <section className='flex items-center justify-center  mb-4'>
      <div style={{
         
        backgroundSize: 'cover',
        backgroundImage: `url(${bgImg})`,
        backgroundPosition:'center'
      
         }} className={`bg-${bgColor} z-20 bg-cover items-center flex justify-center w-[200vh] h-[100vh] max-md:w-[120vh] max-md:h-[100vh] `}>
          <div className='flex-col flex mb-[22rem]  items-center'>
            <div>
            { headText && <p className='text-center text-4xl font-semibold'>{headText}</p>}
      { subText && <p className='text-center text-2xl font-semibold'>{subText}</p>}
  
            </div>
            <div
        id="cta"
        className="flex flex-col items-center justify-center translate-y-96 "
      >
        <div className='flex gap-2 mb-2'>
        <a href="#highlights" className="px-5 py-2 rounded-3xl bg-blue  hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue">Learn more</a>
        <a href="#highlights" className="px-5 py-2 rounded-3xl bg-blue  hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue">Buy</a>
        </div>
          <p>Apple Intelligence coming this fall</p>
      </div>
      </div>

            
      
      </div>
</section>
  )
}

export default Sight