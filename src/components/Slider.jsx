import { useState } from "react"
import { Glider } from "../constants"
import { useGSAP } from "@gsap/react"
import { animationWithGsap } from "../utils/animation"


    const Slider = () => {
      
    const [slider, setSlider] = useState(0)
    const [title, setTitle] = useState()

     useGSAP(() => {
      animationWithGsap('#texting', {opacity: 1, delay: 1, ease: 'power1.inOut'})
     },[])

  return (
    <section className="common-padding bg-black w-screen h-full flex-col justify-center items-center
    mt-32">
     <div className="flex flex-col screen-max-width">
       <p className="text-6xl font-semibold max-md:text-4xl opacity-0 mb-16 text-start" id="texting">Take a closer look</p> 

       <div className=" flex items-center justify-center flex-col">
         {Glider.map((gllider ) => (
            <div>
                <img src={gllider.images[slider]} className="w-[50rem] h-[40rem] object-cover max-md:w-[20rem] max-md:h-[15rem]" />
            </div>
         ))}
         <div className="flex flex-col items-center">
         { Glider.map(() => (<div className="flex bg-zinc/70 gap-2 w-52 h-10 px-2 rounded-full items-center max-md:w-44">
         
        <span className="h-8 w-8 rounded-full bg-slate-500  max-md:h-6 max-md:w-6 cursor-pointer" onClick={() => setSlider(0) &&setTitle(0)}></span> 
        <span className="h-8 w-8 bg-white/90 rounded-full max-md:h-6 max-md:w-6 cursor-pointer" onClick={() => setSlider(1) && setTitle(0) }></span>
        <span className="h-8 w-8 bg-white rounded-full max-md:h-6 max-md:w-6 cursor-pointer" onClick={() => setSlider(2)}></span>
        <span className="bg-red-950 h-8 w-8 rounded-full max-md:h-6 max-md:w-6 cursor-pointer" onClick={() => setSlider(3)}></span>
        <span className="bg-zinc/95 h-8 w-8 rounded-full max-md:h-6 max-md:w-6 cursor-pointer" onClick={() => setSlider(4)}></span>
       </div> ))}
       </div>
        

       </div>

       
     </div>
    </section>
  )
}

export default Slider