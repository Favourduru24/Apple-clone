import gsap from "gsap"
import { color6 } from "../utils"
import { useGSAP } from "@gsap/react"
import { animationWithGsap } from "../utils/animation"

 
 
const Bracket = () => {

  useGSAP(() => {
    animationWithGsap('.text', {opacity: 1, delay: 1})

      animationWithGsap('.testing', { y:0, opacity: 1, ease: 'power2.inOut', duration: 1})
  

   },[])

  return (
    <section className="bg-black sm:py-32 py-20 w-screen  flex justify-center items-center ">
      <div className=" flex flex-col gap-20 screen-max-widt">

      <p className="text-4xl md:text-7xl font-semibold text-center opacity-0 text" id="text" >Strenght. Beauty <br/><span className="text-orange-600 " >Titanium</span>
      </p>
    <div className="">
      <img src={color6} alt="color6"/>
      <div className="mt-28 flex gap-52 px-32 overflow-y-hidden">
      <p className="testing text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]" >iPhone 15 Pro features a Grade 5 titanium design with a new, refined miceoblasted texture. Titanium has one of the highest strenght-to-weight ratio of any metal, making these models <span className="text-white">incredibly strong and impressively light.</span> iPhone 16 Pro comees in four stunning finishes - including new Desert Titanium</p>
      <p className="text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] testing">internam design improvements - including a 100 percent recycled aluminum thermal substructure and back glass optimizations that further dissipate heat - enable up to 20 percent <span className="text-white">better sustain performance</span> than iPhone 15Pro. So you can do all the thing you love - like high-intensity gamming for longer.</p>
      </div>
       </div>
      </div>
    </section>
  )
}

export default Bracket