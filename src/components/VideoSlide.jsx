import { Pause, Play } from "lucide-react"
import { useRef, useState } from "react"

const VideoSlide = ({image, description}) => {

    const videoRef = useRef()
    const [isPlaying, setIsPlaying] = useState(true)
    const [text, setText] = useState('Not Playing')

    const handlePlay = () => {
        videoRef.current.play()
        videoRef.current.volume === 100
      setIsPlaying(false)

      }
      const handlePause = () => {
      videoRef.current.pause()
      setIsPlaying(true)
      }


  return (
       <div className="flex  gap-5 mb-2 flex-col ">
        <div className="relative">
         <video  playsInline className="w-[31rem] h-[34rem] object-cover rounded-xl max-md:h-[20rem] max-md:w-full"
          ref={videoRef}
          onEnded={() => setIsPlaying(true)}
         >
            <source src={image}/>
         </video>
         <div className="flex gap-2 absolute bottom-4 right-4 max-md:left-2">
         <div className=' flex items-center justify-center'>               
          { 
            !isPlaying ? <div className="w-10 h-10  max-md:w-8 max-md:h-8 bg-gray/100 flex  p-1 rounded-full items-center justify-center" ><p className=' rounded-full  text-center '
            onClick={ !isPlaying ? handlePause : handlePlay}
            > <Pause className='text-gray-600 cursor-pointer h-7 w-7 text-center items-center max-md:w-5 max-md:h-5'/></p></div>
            :
             <div className="w-10 h-10  bg-gray/100 flex  p-1 rounded-full items-center justify-center max-md:w-8 max-md:h-8"><p
             className='flex justify-center items-center '
             onClick={ !isPlaying ? handlePause : handlePlay} ><Play className=' text-gray-600 cursor-pointer h-7 w-7 text-center items-center max-md:w-5 max-md:h-5'/></p></div>}
        </div>
         </div>
         </div>
    </div>
  )
}

export default VideoSlide