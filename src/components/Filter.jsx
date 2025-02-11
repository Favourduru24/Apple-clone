import React, { useEffect } from 'react'
import Booklet from './Booklet'
import {Fill} from '../constants/index'
import { useState } from 'react'
import Button from './Button'

const Filter = () => {

    const [item, setItem] = useState(Fill)
    const [color, setColor] = useState(false)
    const menuItem = [...new Set(Fill.map((val) => val.description))]


    const filterItem = (cat) => {
        const newItems = Fill.filter((newval) => newval.description === cat)
        setItem(newItems)
    }

    
  return (
    <div className='bg-zinc common-padding '>
        {/* <Button
        menuItem={menuItem}
        filterItem={filterItem}
        setItem={setItem}
        /> */}
        <Booklet 
         item={item}
        />
    </div>
  )
}

export default Filter