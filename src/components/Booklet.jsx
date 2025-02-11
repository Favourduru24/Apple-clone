
import {useState } from "react"
// import { Fill } from "../constants"
import { bgSlider, bgSliders, color7 } from "../utils"
import { useGSAP } from "@gsap/react"
import { PicsFilter } from "../utils"
import gsap from "gsap"


  
  const Booklet = () => { 

    useGSAP(() => {
     gsap.from('.reply', {opacity: 0, duration:4, ease:'power2.in'})
    },[])
     

      const [firstcol, setFirstCol] = useState(true)
      const [secondcol, setSecondCol] = useState(false)
      const [thirdcol, setThirdCol] = useState(false)
      const [filter, setFilter] = useState(false)

      const handleFirstCol = () => {
        setFirstCol(true)
        setSecondCol(false)
        setThirdCol(false)
      }
      const handleSecondCol = () => {
        setSecondCol(true)
        setFirstCol(false)
        setThirdCol(false)
      }
      const handleThirdCol = () => {
        setThirdCol(true)
        setSecondCol(false)
        setFirstCol(false)
      }
       
    return (
        <section className="flex flex-col items-center gap-5 py-10">
           <div className='text-yellow-300  gap-10 flex justify-center mb-8'>
        
      <button
      className='border-b-2 pb-2 w-60 text-center text-gray font-bold hover:text-white transition-all'
        onClick={handleFirstCol}
      >
        Boost your Porductivity
      </button>
      <button
      className='border-b-2 pb-2 w-60 text-center text-gray font-bold hover:text-white transition-all'
      onClick={handleSecondCol}
      >
        Express yourself visually
      </button>

      <button
      className='border-b-2 pb-2 w-60 text-center text-gray font-bold hover:text-white transition-all'
      onClick={handleThirdCol}
      >
        A new era of siri's
      </button>

         </div>
            
        
          
     
        
        <>
       { firstcol && <div className="flex flex-col">
       <p className="text-[20px] font-sans font-semibold text-center sm:max-w-[32rem] leading-8 "></p>
         <div className="flex gap-10">
     <div className="bg-black w-[30rem] h-[42rem] pt-16 flex flex-col items-center rounded-[1.5rem] justify-center">              
         <div className="relative w-[30rem] h-[18rem] flex items-center justify-center flex-col">
             <img  alt="frame" className="bg-transparent  z-20  h-[30rem] w-[15rem]  "
             src={color7}
             />
           <div className=" absolute w-[44%] h-[140%] overflow-hidden  z-10 bottom-5  rounded-xl ">
               <video autoPlay playsInline={true} muted className='pointer-events-none rounded-2xl'
           >
             <source src={bgSlider} alt="video/mp3" />
           </video> 
           </div> 
           <p className="reply text-[14px] text-center max-w-[20rem] mt-8 mb-16 text-gray "> Awareness of your personal context enables Siri to <span className="text-white">help you in ways that are unique to you. </span>Need your passport number while booking a flight? Siri can help find what you’re looking for, without compromising your privacy.</p>

           </div>
           </div> 

           <div className="flex flex-col gap-8 ">
            <div className="h-[20rem] bg-black text-white w-[30rem] rounded-[1.5rem] flex flex-col items-center">
              <p className="text-[14px] text-center max-w-[20rem] mt-8 mb-16 text-gray ">
            Just hit record in the Notes or Phone app to capture audio recordings and transcripts. Apple Intelligence generates summaries of your transcripts, so you can get the most important info at a glance.
            </p> 
            </div>
            <div className="h-[20rem] bg-black text-white w-[30rem] rounded-[1.5rem] flex flex-col items-center">
              <p className="text-[14px] text-center max-w-[20rem] mt-8 mb-16 text-gray ">
              Priority messages in Mail elevate time-sensitive messages to the top of your inbox — like an invitation that has a deadline today or a check-in reminder for your flight this afternoon.
              </p>
            </div>  
             </div>  
             </div> 
        </div> }

        { secondcol && <div className="flex flex-col">
       <p className="text-[20px] font-sans font-semibold text-center sm:max-w-[32rem] leading-8 "></p>
         <div className="flex gap-10">
     <div className="bg-black w-[30rem] h-[42rem] pt-16 flex flex-col items-center rounded-[1.5rem] justify-center">              
         <div className="relative w-[30rem] h-[18rem] flex items-center justify-center flex-col">
             <img  alt="frame" className="bg-transparent  z-20  h-[30rem] w-[15rem] "
             src={color7}
             />
           <div className=" absolute w-[44%] h-[140%] overflow-hidden  z-10 bottom-5  rounded-xl ">
                <img src={PicsFilter}/> 
           </div> 
           <p className="text-[14px] text-center max-w-[20rem] mt-8 mb-16 text-gray "> Awareness of your personal context enables Siri to <span className="text-white">help you in ways that are unique to you. </span>Need your passport number while booking a flight? Siri can help find what you’re looking for, without compromising your privacy.</p>

           </div>
           </div> 

           <div className="flex flex-col gap-8 ">
            <div className="h-[20rem] bg-black text-white w-[30rem] rounded-[1.5rem] flex flex-col items-center">
            <p className="text-[14px] text-center max-w-[20rem] mt-8 mb-16 text-gray ">
            The Image Playground app lets you create unique images in seconds based on a description, a concept, or even a person from your Photos library. Experiment with image styles like animation, illustration, and sketch.
            </p>
            </div>
            <div className="h-[20rem] bg-black text-white w-[30rem] rounded-[1.5rem] flex flex-col items-center">
              <p className="text-[14px] text-center max-w-[20rem] mt-8 mb-16 text-gray ">
              With Clean Up, you can remove distracting background objects from your photos with just a tap — so you can perfect a shot while staying true to the original image.
              </p>
            </div>  
             </div>  
             </div> 
        </div> }

        { thirdcol && <div className="flex flex-col">
       <p className="text-[20px] font-sans font-semibold text-center sm:max-w-[32rem] leading-8 "></p>
         <div className="flex gap-10">
     <div className="bg-black w-[30rem] h-[42rem] pt-16 flex flex-col items-center rounded-[1.5rem] justify-center">              
         <div className="relative w-[30rem] h-[18rem] flex items-center justify-center flex-col">
             <img  alt="frame" className="bg-transparent  z-20  h-[30rem] w-[15rem] "
                src={color7}
             />
           <div className=" absolute w-[44%] h-[140%] overflow-hidden  z-10 bottom-5  rounded-xl ">
               <video autoPlay playsInline={true} muted className='pointer-events-none rounded-2xl'
           >
             <source src={bgSliders} alt="video/mp3" />
           </video> 
           </div> 
           <p className="text-[14px] text-center max-w-[20rem] mt-8 mb-16 text-gray "> Awareness of your personal context enables Siri to <span className="text-white">help you in ways that are unique to you. </span>Need your passport number while booking a flight? Siri can help find what you’re looking for, without compromising your privacy.</p>

           </div>
           </div> 

           <div className="flex flex-col gap-8 ">
            <div className="h-[20rem] bg-black text-white w-[30rem] rounded-[1.5rem] flex flex-col items-center">
            <p className="text-[14px] text-center max-w-[20rem] mt-8 mb-16 text-gray ">
            Richer language understanding and an enhanced voice make communicating with Siri even more natural. For example, if you stumble over your words, Siri still knows what you’re getting at.
            </p>
            </div>
            <div className="h-[20rem] bg-black text-white w-[30rem] rounded-[1.5rem] flex flex-col items-center">
              <p className="text-[14px] text-center max-w-[20rem] mt-8 mb-16 text-gray ">
              Not sure how to do something on iPhone, like adjust the background blur on a portrait? With expansive product knowledge, Siri can give you step-by-step instructions in a snap.'
              </p>
            </div>  
             </div>  
             </div> 
        </div> }
        </> 

 </section> 

    )
  }
  
  export default Booklet
