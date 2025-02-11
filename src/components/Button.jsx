import React from 'react'
import { Fill } from '../constants'

const Button = ({menuItem, setItem, filterItem}) => {
  return (
    <div className='text-yellow-300  gap-10 flex justify-center'>
        {menuItem.map(val => (
      <button
      className='border-b-2 pb-2 w-60 text-center text-gray font-bold hover:text-white transition-all'
      onClick={() => filterItem(val)}
      >
        {val}
      </button>
        ))}

        {/* <button
         onClick={() => setItem(Fill)}
        >All</button> */}
    </div>

    
  )
}

export default Button