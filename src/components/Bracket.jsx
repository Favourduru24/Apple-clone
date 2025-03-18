import gsap from "gsap"
import { color6 } from "../utils"
import { useGSAP } from "@gsap/react"
import { animationTextWithGsap} from "../utils/animation"

 
 
const Bracket = () => {

  useGSAP(() => {
    animationTextWithGsap('.text', {opacity: 1, duration: 1, ease: 'power1.inOut'})

      animationTextWithGsap('.g_text', {y: 0, opacity: 1, ease: 'power2.inOut', duration: 1})
  

   },[])

  return (
    <section className="bg-black sm:py-32 py-20 w-screen flex justify-center items-center ">
      <div className=" flex flex-col gap-20 screen-max-widt">

      <p className="text-4xl md:text-7xl font-semibold text-center opacity-0 text" id="text" >Strenght. Beauty <br/><span className="text-orange-600 " >Titanium</span>
      </p>
    <div className="">
      <img src={color6} alt="color6" className="w-full h-full max-md:h-[30rem] object-cover"/>
      <div className="mt-28 flex sm:gap-52 sm:px-32 overflow-y-hidden max-md:flex-col px-4 gap-10">
      <p className="feature-text g_text">iPhone 15 Pro features a Grade 5 titanium design with a new, refined miceoblasted texture. Titanium has one of the highest strenght-to-weight ratio of any metal, making these models <span className="text-white">incredibly strong and impressively light.</span> iPhone 16 Pro comees in four stunning finishes - including new Desert Titanium</p>

      <p className="feature-text g_text">internam design improvements - including a 100 percent recycled aluminum thermal substructure and back glass optimizations that further dissipate heat - enable up to 20 percent <span className="text-white">better sustain performance</span> than iPhone 15Pro. So you can do all the thing you love - like high-intensity gamming for longer.</p>
      </div>
       </div>
      </div>
    </section>
  )
}

export default Bracket