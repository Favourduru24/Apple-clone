import React, { useRef, useState } from 'react'
import { bgView} from '../utils'
import { Pause } from 'lucide-react'
import { Play } from 'lucide-react'



const  VideoButton = () => {

    const videoRef = useRef()

     const [playing, setPlaying] = useState(false)


     const handlePlay = () => {
       videoRef.current.play()
      setPlaying(true)

     }
     const handlePause = () => {
     videoRef.current.pause()
     setPlaying(false)
     }
     
     
  return (

    <div className='flex flex-col items-center'>
        <div className='flex gap-2 items-center '>
          <p className='cursor-pointer text-blue'>{playing ? 'Pause' : 'Play'}</p>
               
          { 
            playing ? <button className='border-2 rounded-full border-blue'
            onClick={ handlePause}
            ><Pause className='text-blue cursor-pointer h-5 w-5 p-1'/></button>
            :
             <button
             className='border-2 rounded-full border-blue flex justify-center items-center '
             onClick={handlePlay} ><Play className=' text-blue cursor-pointer h-5 w-5 p-1'/></button> }
        </div>
             
            <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  autoPlay
                  ref={videoRef}
                   onEnded={() => setPlaying(false)}
                >
                  <source src={bgView} type="video/mp4" />
                </video>
    </div>
  )
}

export default VideoButton