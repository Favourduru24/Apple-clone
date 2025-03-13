import React, { useEffect } from 'react'
import Filter2  from './Filter2'
import {Fill} from '../constants/index'
import { useState } from 'react'
import Button from './Button'

const  Banner = () => {

    const [item, setItem] = useState(Fill)


    const filterItem = (cat) => {
        const newItems = Fill.filter((newval) => newval.description === cat)
        setItem(newItems)
    }

    
  return (
    <div className='bg-zinc common-padding '>
        <Filter2/>
    </div>
  )
}

export default Banner