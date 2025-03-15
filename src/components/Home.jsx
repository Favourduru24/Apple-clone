import React from 'react'
import { headVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animationWithGsap } from '../utils/animation'

 const Home = () => {
    useGSAP(() => {
      animationWithGsap('#text', {opacity:1, delay:1,})
      gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
    },[])

  return (
     <section className='nav-height w-full flex flex-col items-center relative justify-center'>
        <div className='h-3/4 w-full flex-center flex-col justify-center'>
              
          <div className='md:w-10/12 w-full sm:mt-24'> 
          <video autoPlay playsInline={true} muted className='pointer-events-none relative '>
            <source src={headVideo} alt="video/mp3" key={headVideo}/>
          </video>
          </div>
           <div className='absolute absolute sm:top-[15%] top-[12%] left-1/2 -translate-x-1/2 text-white z-20  '>
                 <div className='flex flex-col items-center gap-2 '>
                     <p className='sm:text-3xl max-lg:text-lg opacity-0' id='text'>iPhone 16 Pro</p>
                     <p className='xl:text-6xl lg:text-4xl whitespace-nowrap font-semibold md:text-4xl text-3xl opacity-0' id='text'>Hello, Apple Intelligence</p>
                 </div>
              </div>
           </div>

         <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl ">From $199/month or $999</p>
        <p className=' text-gray text-center max-sm:whitespace-nowrap mt-2'>Apple Intelligence coming this fall</p> 
      </div>

    </section>
  )
}

export default Home
