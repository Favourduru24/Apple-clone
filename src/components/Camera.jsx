import React from 'react'
import VideoButton from './VideoButton'
import { animationTextWithGsap } from '../utils/animation'
import { useGSAP } from '@gsap/react'

const Camera = () => {
   
  useGSAP(() =>{
    
    animationTextWithGsap('.animaty', { y:0, opacity: 1, ease: 'power2.inOut', duration: 1})

    animationTextWithGsap('.heading', {opacity: 1, delay: 1, ease: 'power1.inOut'})
  
   },[])
  

  return (
    <section className='bg-black  common-padding'>
        <div className='flex flex-col items-center'>
            <div>
           <p className='heading text-6xl font-semibold max-md:text-4xl opacity-0 mb-20 text-center'>Take total <br/><span className='text-white'>Camera Control.</span></p>
            </div>
            <div className='mt-20 flex flex-col items-center'>
                <VideoButton/>
            </div>
            <div className='mt-28 flex sm:gap-52 sm:px-32 overflow-y-hidden max-md:flex-col gap-10'>
               <p  className='animaty feature-text'>Now you take the perfect photo or video in record time. Camera COntrol gives you an easier way to quickly access camera tools. Simply slide your finger to adjust camera functions like exposure or depth of feild, and toggle through each ens or use digital zoom to frame your shot-Just how you like it</p>
               <div className='flex flex-col gap-8'>
                <p className='animaty feature-text'>Later this year,Camera Control will introduce a two-stage shutter that let you automatically lock focus and exposure with a a light press-so you can reframe your shot without losing focus on your subject</p>
                <p className='animaty text-blue max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]
 hover:border-b-2 hover:border-blue w-64 cursor-pointer pb-1'>How to use Camera Control</p>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Camera