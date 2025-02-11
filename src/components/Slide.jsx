import  { useEffect, useState } from 'react'
import { Dispaly } from '../constants'
import {ArrowLeft, Menu} from 'lucide-react'
import { ArrowRight} from 'lucide-react'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animationWithGsap } from '../utils/animation'

const Slide = () => {
     
    const TRANSLATE_AMOUNT = 600
    const [translate, setTranslate] = useState(0)
    const [isLeftVisible, setIsLeftVisible] = useState(false)
    const [isRightVisible, setIsRightVisible] = useState(false)
    const containerRef = useRef(null) 


    useGSAP(() => {
    animationWithGsap('.texting', { y:0, opacity: 1, ease: 'power2.inOut', duration: 1})
    },[])

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
    <div className=' relative overflow-x-hidden ' ref={containerRef}>

      <div 
      className='flex w-[max-content] whitespace-nowrap gap-10 transition-transform mb-2'
       style={{transform:`translateX(-${translate}px) `, transition: 'all' }}
      >
         {Dispaly.map((display) => (
            <div className='flex flex-col items-center '>
            <div>
           <img src={display.img} alt='all/images' className='w-[35rem] h-[35rem] object-cover rounded-xl'/> 
            </div> 
            <p className='my-2 font-sans text-[1.2rem] font-semibold text-amber-100 text-wrap max-w-[30rem]'>{display.text}</p> 
            </div>          
         ))}
      </div>

      <div className='flex gap-3 justify-end mt-10 mr-4'>
         <div className={` ${isLeftVisible ? 'bg-white/20 rounded-full cursor-pointer p-3 text-white flex items-center' : 'bg-white/25 rounded-full cursor-pointer p-3 text-gray'}`}
         onClick={() => {
            setTranslate(translate => {
                const newTranslate = translate - TRANSLATE_AMOUNT 
                if(newTranslate <= 0 ) return 0
                return newTranslate
            })
         }}
        ><ArrowLeft/></div>

        <div className={` ${isRightVisible ? 'bg-white/20 rounded-full cursor-pointer p-3 text-white flex items-center' : 'bg-white/25 rounded-full cursor-pointer p-3 text-gray'}`}
        onClick={() => {
            setTranslate(translate => {
                if(containerRef.current == null) {
                    return translate
                }
                const newTranslate = translate + TRANSLATE_AMOUNT 
                const edge = containerRef.current.scrollWidth
                const width = containerRef.current.clientWidth
                console.log({width, edge})

                    if(newTranslate + width >= edge ) {
                        return edge - width
                    }
                    return newTranslate
            })     
        }}
        >
<ArrowRight/>  
    </div>
      </div>

      <div className='mt-28 flex gap-52 px-32 overflow-y-hidden'>
        <p className='texting text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]'>New display technology allow us to route display data under active pixels with no distortion, resulting to thinner borders for larger 6.3inch and 6.9-inch <span className='text-white'>Super Retina XDR displays </span>
        that feel graet in the hand</p>
        <p className=' texting text-gray max-w-md text-lg md:text-xl font-semibold translate-y-[100px] opacity-0'>
            iPhone 16 Pro is splash, water, and dust resistant. it also has our latest generation Ceramics Shield material that's <span className='text-white '>two times tougher than any smartphone glass </span>
            Talk about durable.
        </p>
      </div>

      </div>
  )
}

export default Slide