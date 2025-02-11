 import {appleImg, bagImg, searchImg} from '../utils'
 import {navLists} from '../constants'
 import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header className='w-full  sm:px-10 px-5 flex justify-between items-center max-sm:mb-14 mt-2'>
        <nav className='flex w-full screen-max-width justify-between'>
            <Link to="/apple">
            <img  src={appleImg} alt='Apple' width={14}
            height={18} className='cursor-pointer'/>
             </Link>
             
            <div className='flex flex-1 justify-center max-md:hidden gap-3'>
                {navLists.map((nav) =>  (
                    <Link to={nav.href}>
                    <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white  hover:border-b-[1px] pb-1 hover:border-gray transition-all duration-700 relative z-20" >{nav.label}</div></Link>
                ))}
            </div>

            <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 ">
                <img src={searchImg} alt='search' width={18} height={18} className='cursor-pointer z-20'/>
                <img src={bagImg} alt='bag' width={18} height={18} className='cursor-pointer z-20'/>
            </div>
        </nav>

    </header>
  )
}

export default Navbar