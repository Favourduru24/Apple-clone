 import {appleImg, bagImg, searchImg} from '../utils'
import {  useState } from "react"
import { navLinks } from "../constants"
 import {Link, useLocation} from "react-router-dom"

const NavItems = () => {

    const pathname = useLocation()

    return (
        <ul className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20 '>
         {navLinks.map((nav) => (
             <li key={nav.id} className='text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5'> 
               <Link to={nav.href} className={`${pathname.pathname === nav.href ? "text-lg md:text-base text-white transition-colors" : "text-lg md:text-base hover:text-white transition-colors" } `}>
                {nav.name}
               </Link>
             </li>
         ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <header className='fixed top-0 left-0 z-50 bg-[#000]/90 right-0 text-white '>
        <div className='max-w-7xl mx-auto w-full '>
            <div className='flex justify-between items-center py-5 mx-auto sm:px-10 px-5'>
            <Link to="/" className=''>
             <img  src={appleImg} alt='Apple' width={14}
            height={18} className='cursor-pointer'/>          
              </Link>
         <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden  cursor-pointer' aria-label="Toggle Menu">
          <img src={isOpen ? 'assets/images/close.svg' : 'assets/images/menu.svg'} alt='toggle' className='w-6 h-6'/>
         </button>

           <nav className='sm:flex hidden '>
         <NavItems/>
           </nav>
           <div className="flex i gap-7 sm:flex max-sm:flex-1 hidden">
               <img src={searchImg} alt='search' width={18} height={18} className='cursor-pointer z-20'/>
                <img src={bagImg} alt='bag' width={18} height={18} className='cursor-pointer z-20'/>            </div>
            </div>
        </div>
          <div className={`absolute left-0 right-0 bg-[#0E0E10] backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-screen' : 'max-h-0'}`}>
            <nav className='p-5'>
           <NavItems/>
            </nav>
          </div>
    </header>
  )
}

export default Navbar