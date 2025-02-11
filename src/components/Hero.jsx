// import {useGSAP} from '@gsap/react'
// import gsap from 'gsap'
// import {useEffect, useState} from 'react'
// import { heroVideo, smallHeroVideo } from '../utils'
// import { animationWithGsap } from '../utils/animation'

// const Hero = () => {
//      const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

//      const handleVideoSet = () => {
//         if(window.innerWidth < 760) {
//             setVideoSrc(smallHeroVideo)
//         } else{
//             setVideoSrc(heroVideo)
//         }
//      }

//      useEffect(() => {
//    window.addEventListener('react', handleVideoSet)

//    return () => {
//     window.addEventListener('resize', handleVideoSet)
//    }
//      }, [])

//     useGSAP(() => {
//       animationWithGsap( '#hero', {opacity: 1, delay: 2 }) 

//       animationWithGsap('#cta', {opacity: 1, delay:2 ,y:-50 })

//     },[])

//   return (
//     <section className="w-full nav-height bg-black relative">

//         <div className="h-5/6 w-full flex-center flex-col ">
//         <p id="hero" className="hero-title"> iPhone 15 Pro</p>
//         <div className="md:w-10/12 w-9/12">
//       <video autoPlay muted playsInline={true} key={videoSrc} className='pointer-events-none'>
//      <source src={videoSrc} type='video/mp4'/>
//       </video>
//         </div>
//         </div>
        
//           <div id='cta' className='flex flex-col items-center opacity-0 transition-y-20'>
//              <a href='#highlights' className='btn'>Buy</a>
//              <p className='font-normal text-xl'>From $199/month or $999</p>
//           </div>
//     </section>
//   )
// }

// export default Hero


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';
import {appleImg, bagImg, searchImg} from '../utils'
 import {navLists} from '../constants'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

     const [open, setOpen] = useState(false)

     const handleOpen = () => {
      setOpen((prev) => !prev)
     }

  return (
    <>
    
    <section className="w-full  bg-black relative nav-height"> 
      
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
    </>
  )
}

export default Hero
