import { ipad , light, framer, handpad, card, stand} from '../utils'
import {Link } from 'react-router-dom'
import Sight from './Sight'
import Card from './Card'

const Target = () => {

   
  return (
    <section className='bg-white'>
       <div className='mb-3'>
       <Link to="/apple">
        <Sight 
        bgImg={framer}
         bgColor="black "
        headText="Hello, Apple Intelligence"
        subText=" iPhone 16 Pro"
        title="Apple Intelligence coming this fall"
        />
        </Link>
        </div>
        <Link to='/products'>
        <Sight 
        bgImg={light}
        bgColor="blue"
        title="Apple Intelligence coming this fall"
        />
        </Link>
         <div className='flex gap-3 justify-center max-md:flex-col max-md:gap-3 my-3'>
         <Link to='/products'>
        <Sight 
        bgImg={handpad}
        bgColor="blue"
         container=""
        title="Apple Intelligence coming this fall"
         button
        />
        </Link>
        <Link to='/products'>
        <Sight 
        bgImg={ipad}
        bgColor="blue"
        title="Apple Intelligence coming this fall"
        button
        />
        </Link>
         </div>
         <div className='flex gap-3 justify-center max-md:flex-col max-md:gap-3'>
         <Link to='/products'>
        <Sight 
        bgImg={card}
        bgColor="blue"
        title="Apple Intelligence coming this fall"
        button
        />
        </Link>
         <Link to='/products'>
        <Sight 
        bgImg={stand}
        bgColor="blue"
        title="Apple Intelligence coming this fall"
        button
        />
        </Link>
         </div>
        <Card/>
    </section>
   
  )
}

export default Target