import React from 'react'
import View from './View'
import { animationWithGsap } from '../utils/animation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Camera = () => {
   
  useGSAP(() =>{
    
    animationWithGsap('.animaty', { y:0, opacity: 1, ease: 'power2.inOut', duration: 1})

    animationWithGsap('.heading', {opacity:1, delay: 1})
  
   },[])
  

  return (
    <section className='bg-black  common-padding'>
        <div className='flex flex-col items-center'>
            <div>
           <p className='heading text-gray text-6xl font-sans font-semibold  text-center opacity-0'>Take total <br/><span className='text-white'>Camera Control.</span></p>
            </div>
            <div className='mt-20 flex flex-col items-center'>
                <View/>
            </div>
            <div className='mt-28 flex gap-52 px-32 overflow-y-hidden'>
               <p  className='animaty text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]'>Now you take the perfect photo or video in record time. Camera COntrol gives you an easier way to quickly access camera tools. Simply slide your finger to adjust camera functions like exposure or depth of feild, and toggle through each ens or use digital zoom to frame your shot-Just how you like it</p>
               <div className='flex flex-col gap-8'>
                <p className='animaty text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]'>Later this year,Camera Control will introduce a two-stage shutter that let you automatically lock focus and exposure with a a light press-so you can reframe your shot without losing focus on your subject</p>
                <p className='animaty opacity-0 text-blue font-sans text-[1rem] font-semibold hover:border-b-2 hover:border-blue w-52 cursor-pointer pb-1'>How to use Camera Control</p>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Camera