import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { useState } from 'react'

export const Cart = () => {
    
    const [pid, setpid] = useState([])
    const {id} = useContext(AppContext) 
    console.log(pid)
    if(id !== undefined)
        pid.push(id)

    return (
    
    <div>
        Cart
        {
            pid?.length>0?pid.length:0
        }
        
    </div>
  
)
}
