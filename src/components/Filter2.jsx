import {useState} from "react"
import { bgSlider, color7, grid2 } from "../utils"
import { Fill } from "../constants"
import { PicsFilter } from "../utils"
import { grid1 } from "../utils"

  const Filter2 = () => { 
   
     const [gallary, setGallary] = useState({
      video:bgSlider,
      image:PicsFilter,
      text1:"Awareness of your personal context enables Siri to  help you in ways that are unique to you. </span>Need your passport number while  booking a   flight Siri can help find what you’re looking for, without compromising your privacy",
      text2: 'Just hit record in the Notes or Phone app to capture audio recordings and transcripts. Apple Intelligence generates summaries of your transcripts, so you can get the most important info at a glance.',
      text3:"Priority messages in Mail elevate time-sensitive messages to the top of your inbox — like an invitation that has a deadline today or a check-in reminder for your flight this afternoon.",
      button:'hello',
      img1: grid1,
      img2: grid2
    })
  
      const [firstcol, setFirstCol] = useState(true)

     
     return (
        <section className="flex flex-col items-center gap-5 py-10">
        <div className=' gap-10 flex justify-center mb-8 '>
         {Fill.map((filter) => (
        <button
         key={filter.id}
        className={`${gallary === filter ? "border-b pb-2 text-center text-white/60 font-bold  transition-all w-48 max-lg:hidden" : "pb-2 w-60 text-center text-gray font-bold transition-all max-lg:hidden border-none " }`}
         onClick={() => setGallary(filter)}
        >
          {filter.button}
          </button>
          ))}
       
        <div className="flex items-center hidden max-lg:flex gap-4">
           {Fill.map((filter, index) => (
         <div className={`${gallary === filter ? 'w-8 h-2 rounded-md bg-gray-600 backdrop-blur' : 'w-8 h-2 rounded-md bg-gray-200 backdrop-blur cursor-pointer'}`}
          onClick={() => setGallary(filter)}  
         key={filter.id}
          >
          </div>
           ))}
           </div>
         </div>

          <div className="flex flex-col ">
          <div className="flex gap-10 max-lg:flex-col max-lg:gap-10">
          <div className="bg-black w-[25rem] h-[42rem] pt-16 flex flex-col items-center rounded-[1.5rem] justify-center">              
          <div className="relative w-[25rem] h-[18rem] flex items-center justify-center flex-col">
           <img  alt="frame" className="bg-transparent  z-20  h-[30rem] w-[15rem]"
            src={color7}
           />
           <div className=" absolute w-[50%] h-[155%] overflow-hidden  z-10 bottom-5  rounded-xl ">
              { gallary.video ? <video autoPlay playsInline={true} muted key={gallary.video} className='pointer-events-none rounded-2xl'
           >
            <source src={gallary.video} alt="video" />
           </video> :
             <div className="absolute w-[100%] h-[140%] overflow-hidden z-10 bottom-5  rounded-xl ">
             <img src={gallary.image} className="className=pointer-events-none rounded-2xl w-full h-full"/>
             </div>
           }
           </div> 
           <p className="reply text-[16px] text-center max-w-[20rem] mt-8 mb-16 text-gray ">{gallary.text1}</p>

           </div>
           </div> 

           <div className="flex flex-col gap-8 justify-center">
            <div className="h-[20rem] bg-black text-white w-[25rem] rounded-[1.5rem] flex flex-col items-center">
              <p className="text-[16px] text-center max-w-[20rem] mt-8 mb-16 text-gray ">
              {gallary.text2}
            </p> 
                <div className="w-20 h-20">
                   <img src={gallary.img1} alt="img" className="w-full h-full"/>
                </div>
            </div>
            <div className="h-[20rem] bg-black text-white w-[25rem] rounded-[1.5rem] flex flex-col items-center">
              <p className="text-[16px] text-center max-w-[20rem] mt-8 mb-16 text-gray ">
               {gallary.text3}
              </p>
               <div className="w-20 h-20">
                   <img src={gallary.img2} alt="img" className="w-full h-full"/>
                </div>
            </div>  
             </div>  
             </div> 

        </div> 
        
        
 </section> 
    )
  }
  export default Filter2
