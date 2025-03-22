import React from 'react'
import { bigText, headVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animationWithGsap } from '../utils/animation'

 const Home = () => {
    useGSAP(() => {
      animationWithGsap('#text', {opacity:1, delay:1,})
      gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
    },[])

  return (
     <section className='min-h-screen w-full flex flex-col items-center justify-center bg-black'>

          <div className='md:w-10/12 w-9/12 sm:mt-14 h-[50rem] relative '>
            
          <video autoPlay playsInline={true} muted className='pointer-events-none w-full h-full'>
            <source src={headVideo} alt="video/mp3" key={headVideo}/>
          </video>
            <div className="absolute top-32 w-full flex justify-center items-center sm:pt-5 h-40">
  <div id="text" className="relative z-20 opacity-0 flex justify-center items-center">
    <img src={bigText} alt="homeImg" className="h-full w-full" />
    
    <p className="absolute text-2xl sm:text-4xl font-serif text-white  top-[25%] sm:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
      iPhone 16 Pro
    </p>
  </div>
</div>
            <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 bottom-0 absolute w-full justify-center "
      >
        <a href="#highlights" className="btn gap-5">Buy</a>
        <p className="font-normal text-xl ">From $199/month or $999</p>
        <p className=' text-gray text-center max-sm:whitespace-nowrap mt-2'>Apple Intelligence coming this fall</p> 
      </div>
      </div>

    </section>
  )
}

export default Home
