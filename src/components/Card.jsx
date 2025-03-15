import { Boxes } from '../constants'
import { appleImg} from '../utils'

const Card = () => {
     return (
      <div className='maylike-products-container'>
           <div className='marquee'>
              <div className='sm:track truck'>
    <div className='products-container'>
    <div className='product-card' >
           {Boxes.map((box, index) => (
              <div className='product-card relative' key={index}>
             <img src={box.image} alt="cards" className='product-image' width={250} height={250} key={index}/>
               <div className='flex absolute bottom-0 right-8 items-center'>
                 <div className='w-5 h-5'>
                <img src={appleImg} className='w-full h-full'/>
                 </div>
               <p className='text-white text-2xl font-semibold'>{box.text}</p>
               </div>
             </div>
           ))} 
      </div>
     </div>
      </div>
    </div> 
      </div>
  )
}

export default Card