import { color6 } from '../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const ResizePhone = () => {
    
    useGSAP(() => {
         const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger: '#clip',
                end: '+=800 center',
                scrub: 0.5,
            pin: true,
         pinSpacing: true            }
         })

         clipAnimation.to('.mask-clip-path', {
             width: '100vw',
             height:'100vh',
             borderRadius:0
         })
    })

  return (
    <div className="min-h-screen w-screen relative overflow-hidden" id="clip">
         <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <p>Hello World</p>
        </div> 
        <div className="h-[50rem] w-screen " id="clip">
     <div className="mask-clip-path absolute left-1/2 top-0 -z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
        <img 
        src={color6 }
        alt="Background"
        className="absolute left-0 top-0 size-full object-cover"
        />
     </div>
        </div>
    </div>
  )
}

export default ResizePhone