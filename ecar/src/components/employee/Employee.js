import React, { useState } from 'react'
import { EmployeeAdd } from './EmployeeAdd'
import { EmployeeList } from './EmployeeList'

export const Employee = () => {
  var title = "Employee"

  var [employees, setemployees] = useState([
    {
      id:1,
      name:"kenil",
      salary:1000,
    },
    {
      id:2,
      name:"om",
      salary:2000,
    },
    {
      id:3,
      name:"perin",
      salary:3000
    }
  ])
  
  const demo = ()=>{
    alert('passed')
  }
  
  const deleteEmployee = (id)=>{

    // window.alert('delete')
    employees = employees.filter((x) => x.id !== id)
    setemployees(employees)
    if(employees.length === 0)
    {
      return "No Employees"
    }
    // console.log("---",employees)

  }

  const addemp = (emp)=>{

    setemployees([...employees,emp])

  }

  return (
    <div>

        Employee
        <EmployeeAdd newemp={addemp} />
        <EmployeeList t={title} delemp={deleteEmployee} emp={employees} demo={demo}/>
    </div>
  )
}
