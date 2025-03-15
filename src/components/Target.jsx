import { ipad , light, framer, handpad, card, stand} from '../utils'
import {Link } from 'react-router-dom'
import Sight from './Sight'
import Card from './Card'

const Target = () => {

  return (
    <section className='bg-white'>
       <div className='mb-3'>
       <Link to="/store">
        <Sight 
        bgImg={framer}
         color="black"
        headText="Hello, Apple Intelligence"
        subText=" iPhone 16 Pro"
        title="Apple Intelligence coming this fall"
        />
        </Link>
        </div>
        <Link to='/products'>
        <Sight 
        bgImg={light}
        color="blue"
        title="Apple Intelligence coming this fall"
        />
        </Link>
         <div className='flex gap-3 justify-center max-md:flex-col max-md:gap-3 my-3'>
         <Link to='/products'>
        <Sight 
        bgImg={handpad}
        bgColor="blue"
         bgText="iPhone"
        title="Apple Intelligence coming this fall"
        color="blue"
         button
        />
        </Link>
        <Link to='/store'>
        <Sight 
        bgImg={ipad}
        bgColor="blue"
        bgText="iPad"
        title="Meet the iPhone 16 family"
        color="black"
        button
        />
        </Link>
         </div>
         <div className='flex gap-3 justify-center max-md:flex-col max-md:gap-3'>
         <Link to='/products'>
        <Sight 
        bgImg={card}
        bgText="Trade In"
        title="Get up to 3% Daily Cash back."
        button
        />
        </Link>
         <Link to='/store'>
        <Sight 
        bgImg={stand}
        bgText="Trade In"
        title="Built for iPhone intelligent."
        button
         color="white"
        />
        </Link>
         </div>
         <Card/>
    </section>
   
  )
}

export default Target