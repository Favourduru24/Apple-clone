import { useGSAP } from "@gsap/react"
import { chipImg, frameImg, frameVideo } from "../utils"
import gsap from "gsap"
import { useRef } from "react"
import { animationWithGsap } from "../utils/animation"

const Chips = () => {
   const videoRef = useRef()

   useGSAP(() => {
    gsap.to('.hiw-video', {
        scrollTrigger: {
            trigger: '.hiw-video',
            toggleActions: 'play pause reverse restart',
            start: 'top 85%',
        },
        onComplete: () => {
            videoRef.current.play()
        }
    })

     
    gsap.from('#chip', {
       scrollTrigger: {
           trigger: '#chip',
           toggleActions: 'restart reverse restart reverse',
           start: 'top 85%',
       },
       opacity: 0,
       scale: 2,
       duration: 2,
       ease: 'power2.inOut'
              },
    {scrub: 5.5})

    animationWithGsap('.g_fadeIn', {opacity: 1, y: 0, duration: 1, ease:'power2.inOut'})

   },[])
  return (
    <section className="common-padding">
        <div className="screen-max-width">
          <div className="flex-center w-full my-20" id="chip">
             <img src={chipImg} width={180} height={180} alt="chips"/>
          </div>
          <div className="flex flex-col items-center">
         <h2 className="hiw-title">A17 Pro chip. <br/> A monster win for gaming.</h2>
         <p className="hiw-subtitle">It's here. The biggest redesign in the history of Apple GPUs</p>
          </div>

          <div className="mt-10 md:mt-20 mb-14 ">
             <div className="relative h-full flex-center">

                <div className="overflow-hidden">
                    <img src={frameImg} alt="frame" className="bg-transparent relative z-10 "/>
                </div>
                <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                    <source src={frameVideo} type="video/mp4"/>
                </video>
                </div>
             </div>
             
             <p className="text-gray font-semibold text-center mt-3 mb-10">Honkai: Star Rail</p>
               <div/>
               
                    <div className='hiw-text-container'>
                       <div className='flex-1 flex justify-center flex-col'>
                        <p className="hiw-text g_fadeIn" >
                            A17 Pro is an entirely new class of iPhone that deliver our {' '}
                            <span className='text-white'>best graphic performance by far</span>
                        </p>

                       
                        <p className="hiw-text g_fadeIn" >
                             Mobile {' '}
                            <span className='text-white'>games will look and feel so immersive.</span>
                             with incredibly detailed enviroment and characters.
                        </p>
                       </div>

                    <div className="flex-1 flex justify-center flex-col g_fadeIn">
                     <p className="hiw-text">New</p>
                     <p className="hiw-bigtext">Pro-class GPU</p>
                     <p className="hiw-text">with 6 cores</p>
                    </div>
                    </div>
          </div>
        </div>
    </section>
  )
}

export default Chips