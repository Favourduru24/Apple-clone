 import { useGSAP } from "@gsap/react"
import { appleImages } from "../utils"
import { animationWithGsap } from "../utils/animation"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
const Apple = () => {

    useGSAP(() => {

       animationWithGsap('.imagine', {width: 110, repeat:-1 , yoyo:true ,duration: 2, ease: 'elastic'})

       animationWithGsap('.apple', { y:0, opacity: 1, ease: 'power2.inOut', duration: 1, stagger: 0.5})
    
    },[])

     
  return (
    <section className="bg-black common-padding ">
           <div className="flex justify-center flex-col items-center">
               <div className="flex flex-col items-center justify-center">

                <div className="mb-10 ">
                <img src={appleImages} width={100} height={100} className="object-cover imagine"/>
                </div>

                <div >
                <p className="apple text-4xl font-semibold max-w-[25rem] ">Great powers come with great privacy.</p>
                </div>

               </div>

               <div className="flex flex-row gap-32 mt-16 items-center justify-center mx-32">
               <div>
                <p className="apple text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] ">Apple intelligence is designed to <span className="text-white">protect your privacy at every step </span>it's intelligence into the core of iPhone through on-device proccessing. So it's aware of your personal information without collection your personal information.</p>
               </div>
               <div>
                <p className="apple text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]">And with <span className="text-white">groundbreaking Private Cloud Compute,</span> Apple Intelligence can draw on larger Apple-designed server-based models, running on Apple silicon,  to handle more complex requests for you while protecting your privacy</p>
               </div>
               </div>
               <div className=" flex items-center gap-2  mt-8 cursor-pointer apple text-blue text-[1rem] md:text-[1rem] font-semibold opacity-0 translate-y-[100px]">
               <p className="text-end">Learn more about Apple Intelligence</p>
               <ArrowRight/>
               </div>
           </div>
         </section>

  )
}

export default Apple