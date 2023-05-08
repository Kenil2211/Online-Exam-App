import React from 'react'
import { Link } from 'react-router-dom'

export const ContactUs = () => {
  return (
    <div>
      ContactUs
    
      <ul>
        <li>
          <Link to='manager'>Manager </Link>
        </li>
        
        <li>
          <Link to='general'>General </Link>
        </li>
      </ul>
    
    
    </div>
  )
}
