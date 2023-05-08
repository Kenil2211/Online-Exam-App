import React from 'react'
import { Employee } from './Employee'

export const EmployeeList = (props) => {
  
  
  return (
    
    <div>
      

        {/* EmployeeList */}
        <h1>{props.t}</h1>
        {
          
          props.emp.map((e)=>{
            return(
            <ul>
              <li>
                {e.id}
              </li>
              <li>
                {e.name}
              </li>
              <li>
                {e.salary}
              </li>
              <li>
                <button onClick ={()=>{props.delemp(e.id)}} >DELETE</button>
              </li>
            </ul> 


            )
          })
        }

    </div>
  )
}
