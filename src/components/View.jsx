import React, { useRef, useState } from 'react'
import { bgView} from '../utils'
import { Pause } from 'lucide-react'
import { Play } from 'lucide-react'



const View = () => {

    const videoRef = useRef()

     const [isPlaying, setIsPlaying] = useState(true)


     const handlePlay = () => {
       videoRef.current.play()
     setIsPlaying(false)

     }
     const handlePause = () => {
     videoRef.current.pause()
     setIsPlaying(true)
     }
     
     
  return (

    <div className='flex flex-col items-center'>
        <div className='flex gap-2 items-center '>
          <p className='cursor-pointer text-blue'>{!isPlaying ? 'Pause' : 'Play'}</p>
               
          { 
            !isPlaying ? <p className='border-2 rounded-full border-blue'
            onClick={ !isPlaying ? handlePause : handlePlay}
            ><Pause className='text-blue cursor-pointer h-5 w-5 p-1'/></p>
            :
             <p
             className='border-2 rounded-full border-blue flex justify-center items-center '
             onClick={ !isPlaying ? handlePause : handlePlay} ><Play className=' text-blue cursor-pointer h-5 w-5 p-1'/></p> }
        </div>
             
            <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={videoRef} 
                >
                  <source src={bgView} type="video/mp4" />
                </video>
    </div>
  )
}

export default View