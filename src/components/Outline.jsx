import { useRef } from "react"
import { bgVideo } from "../utils" 
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { bgBackground } from "../utils";
import { animationWithGsap } from "../utils/animation";

const Outline = () => {

  const videoRef = useRef();
  const bgRef = useRef();
  // useGSAP(() => {
  //  gsap.to('.text-video', {
  //   scrollTrigger: {
  //   trigger: '.text-video',
  //   toggleActions: 'play pause reverse restart',
  //   start:'top 85%'
  //  },
  //  onComplete :() => {
  //   videoRef.current.play()
  //  }
  // })},[])

  useGSAP(() => {
    gsap.to('.text-video', {
        scrollTrigger: {
            trigger: '.text-video',
            toggleActions: 'play pause reverse restart',
            start: '20% bottom',
        },
        onComplete: () => {
            videoRef.current.play()
        }
    })

    gsap.to('.bg-video', {
      scrollTrigger:{
        trigger:'.bg-video',
        toggleActions:"play pause resverse, restart",
        start:'top 80%'
      },
      onComplete: () => {
        bgRef.current.play()
      }
    })

    animationWithGsap('.gig', { y:0, opacity: 1, ease: 'power2.inOut', duration: 1, stagger: 0.5})
    
  },[])

  return (
    <section className='common-padding flex flex-col screen-max-width justify-center items-center'>
    <div className=' flex flex-col '>
        <div className="text-video ">
            <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
            <source src={bgVideo} type="video/mp4" />
            </video>
        </div>

        <div className=' w-full sm:mt- bg-video'> 
          <video autoPlay playsInline={true} muted className='pointer-events-none w-full' ref={bgRef}>
            <source src={bgBackground} alt="video/mp3" key={bgBackground}/>
          </video>
          </div>
          <div className="justify-center flex items-center">
            <p className="text-center text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] gig">iPhone 16 Pro is built for Apple intelligence, the personal intelligence system that helps you <span className="text-white">write express yourself, and get things done effortlessly.</span> with groundbreaking privacy protections, it gives you peace of mind that no one else can access your data-not even Apple</p>
          </div>
        </div>
    </section>
  )
}

export default Outline