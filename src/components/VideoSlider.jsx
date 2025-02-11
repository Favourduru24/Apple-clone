import VideoSlide from "./VideoSlide"
import { firstCarousel, fourthCarousel } from "../utils"
import { secondCarousel } from "../utils"
import { thirdCarousel } from "../utils"
import { useEffect, useRef, useState } from "react"
import { Dispaly } from "../constants"
import { ArrowLeft, ArrowRight } from "lucide-react"

const VideoSlider = () => {
  
  const TRANSLATE_AUTO = 500;

  const [translate, setTranslate] = useState(0)

  const containerRef = useRef(null)
  const [isLeftVisible, setIsLeftVisible] = useState(false)
    const [isRightVisible, setIsRightVisible] = useState(false)

    useEffect(() => {
      if(containerRef.current == null) return
    
      const observer = new ResizeObserver(entries => {
        const container = entries[0]?.target
         if(container == null) return
         
         setIsLeftVisible(translate > 0)
         setIsRightVisible(translate + container.clientWidth < container.scrollWidth)
      })
      observer.observe(containerRef.current)
    
      return () => {
        observer.disconnect()
      }
        },[translate])
    

  return (
    <section className="sm:py-32 py-20  px-10 bg-zinc  flex flex-col ">
      <div className='max-screen-width relative overflow-x-hidden ' ref={containerRef}>
        <div className="flex w-[max-content] whitespace-nowrap gap-5 transition-transform mb-2 pr-[30rem] sm:pl-40"
        style={{transform: `translateX(-${translate}px)`, transition: 'all' }}
        >
            <VideoSlide
             image={fourthCarousel}
             description='Click to launch the Camera app.
Click again to instantly take a photo'
            />
            <VideoSlide
             image={firstCarousel}
             description='Click and hold to start recording video.'
            />
            <VideoSlide
             image={secondCarousel}
             description='A light press opens controls like zoom'
            />
            <VideoSlide
             image={thirdCarousel}
             description='With a double light press, you can select another camera setting. Then slide to adjust that setting.'
            />
        </div>

      <div className="flex gap-2 justify-end mt-10 pr-2">
        <p  className={` ${isLeftVisible ? 'bg-white/20 rounded-full cursor-pointer p-3 text-white flex items-center' : 'bg-white/25 rounded-full cursor-pointer p-3 text-gray'}`}
       onClick={() => {
        setTranslate(translate => {
            const newTranslate = translate - TRANSLATE_AUTO
            if(newTranslate <= 0 ) return 0
            return newTranslate
        })
     }}
        ><ArrowLeft className="w-5 h-5"/></p>

        <p className={` ${isRightVisible ? 'bg-white/20 rounded-full cursor-pointer p-3 text-white flex items-center' : 'bg-white/25 rounded-full cursor-pointer p-3 text-gray'}`}           
        onClick={() => {
            setTranslate(translate => {
                if(containerRef.current == null) {
                    return translate
                }
                const newTranslate = translate + TRANSLATE_AUTO
                const edge = containerRef.current.scrollWidth
                const width = containerRef.current.clientWidth
                console.log({width, edge})

                    if(newTranslate + width >= edge ) {
                        return edge - width
                    }
                    return newTranslate
            })     
        }}
        ><ArrowRight className="w-5 h-5"/></p>
      </div>
      </div>

     </section>
  )
}

export default VideoSlider