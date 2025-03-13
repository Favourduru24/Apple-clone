import React from 'react'
import { headVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animationWithGsap } from '../utils/animation'

 const Home = () => {
    useGSAP(() => {
      animationWithGsap('#text', {opacity:1, delay:1,})
      gsap.to('#play', {opacity:1,  delay: 2, y: -5})
    },[])

  return (
     <section className=' nav-height w-full  flex flex-col items-center bg-black'>
        <div className='h-5/6 w-full flex-center flex-col '>
      <p id='text' className="absolute top-12 text-center pt-14 sm:text-2xl z-20 mt-10 opacity-0 max-lg:text-lg"
          >iPhone 16 Pro</p>
          <p id='text' className="absolute top-20 text-center pt-14 sm:text-5xl z-20 mt-10 opacity-0 max-lg:text-3xl font-semibold"
          >Hello, Apple Intelligence.</p> 
          <div className='md:w-10/12 w-full sm:mt-14'> 
          <video autoPlay playsInline={true} muted className='pointer-events-none relative '>
            <source src={headVideo} alt="video/mp3" key={headVideo}/>
          </video>
          </div>
          </div>

        <div id='play' className='absolute z-10 bottom-32 tranform -translate-x-1/2 text-center left-1/2 bg-blue px-4 py-2 rounded-full  opacity-0 mb-5 sm:translate-y-1/2'>
        <p className=''>Buy</p>
        </div>
          <p id='play' className='absolute z-20 bottom-28 tranform -translate-x-1/2 translate-y-20 opacity-0 text-center left-1/2 max-sm:whitespace-nowrap'>From $999 or $41.62/mo. for 24mo</p>
          <p id='play' className=' text-gray absolute z-20 bottom-20 tranform -translate-x-1/2 translate-y-20 opacity-0 text-center left-1/2 max-sm:whitespace-nowrap'>Apple Intelligence coming this fall</p>

    </section>
  )
}

export default Home
