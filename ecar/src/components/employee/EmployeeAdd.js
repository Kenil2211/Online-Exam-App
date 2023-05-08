import React, { useState } from 'react'

export const EmployeeAdd = (props) => {
  
    const [name, setname] = useState('')
    const [salary, setsalary] = useState('')

    
    const submit = (e)=>
    {
        e.preventDefault();
        
        console.log('name ===',name)
        console.log('salary ====',salary)
        // alert('submit')
        
        var data = {
            name:name,
            salary:salary
        }
        props.newemp(data)
    }

  
    return (
    <div>
        <h1>EmployeeAdd </h1>
        <div>
            <form onSubmit={submit}>
                <div>
                    Employee Name : <input type="Text" onChange={(e)=>{setname(e.target.value)}}/>
                </div>
                <div>
                    Employee salary : <input type="Text" onChange={(e)=>{setsalary(e.target.value)}}/>
                </div>
                <div>
                    <input type="submit" value="Add Employee" />
                </div>
            </form>
        </div>
    </div>
  )
}
