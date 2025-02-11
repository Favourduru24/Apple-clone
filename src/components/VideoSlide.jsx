import { Pause, Play } from "lucide-react"
import { useRef, useState } from "react"

const VideoSlide = ({image, description}) => {

    const videoRef = useRef()
    const [isPlaying, setIsPlaying] = useState(true)
    // const [reset, setReset] = useState(false)

    const handlePlay = () => {
        videoRef.current.play()
      setIsPlaying(false)

       
 
      }
      const handlePause = () => {
      videoRef.current.pause()
      setIsPlaying(true)
      }

  return (
       <div className="flex  gap-5 mb-2 flex-col ">
        <div className="relative">
         <video muted playsInline className="w-[31rem] h-[34rem] object-cover rounded-xl"
          ref={videoRef}
         >
            <source src={image}/>
         </video>
         <div className="flex gap-2 absolute bottom-4 right-4">
         <div className=' flex items-center justify-center'>               
          { 
            !isPlaying ? <div className="w-10 h-10  bg-gray/100 flex  p-1 rounded-full items-center justify-center" ><p className=' rounded-full  text-center '
            onClick={ !isPlaying ? handlePause : handlePlay}
            > <Pause className='text-gray-600 cursor-pointer h-7 w-7 text-center items-center '/></p></div>
            :
             <div className="w-10 h-10  bg-gray/100 flex  p-1 rounded-full items-center justify-center"><p
             className='flex justify-center items-center '
             onClick={ !isPlaying ? handlePause : handlePlay} ><Play className=' text-gray-600 cursor-pointer h-7 w-7 text-center items-center '/></p></div>}
        </div>
         </div>
         </div>
         <div className="">
         <p className="text-gray-600 text-[1.1rem] font-sans font-semibold text-wrap sm:max-w-[28rem] text-center leading-8">{description}</p>
            
         </div>

    </div>
  )
}

export default VideoSlide