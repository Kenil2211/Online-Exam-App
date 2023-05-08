import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const    EmployeeAddress = () => {
  
    const {register, handleSubmit}= useForm()

    const [state1, setstate1] = useState('')
    const [cityData, setcityData] = useState('')

    
    const data=
    [  
            {
                state:"Gujarat",
                city:
                {
                    name:["Ahmedabad","Rajkot"]
                }
            },
            {
                state:"Maharashtra",
                city:
                {
                    name:["Pune","Nagpur"]
                }
            }  
    ]
    
    const cityData1 = (e)=>{    

        setcityData(e.target.value)
    }
    
    const cityHandler =(e)=>{
        console.log('city selected--',e.target.value)
        console.log(e.target.value)
        console.log(typeof e.target.value)
    }

    return (
    <div>
        EmployeeAddress
        <form action="">
        <div>
            Name : <input type="text" placeholder="Name"/>
        </div>
        <div>
            Address Line 1 : <input type="text" placeholder="address"/>
        </div>
        <div>
            state : <select {...register('state')} name="state" title="state List" onChange={(e)=>
                {
                    // setstate1(e.target.value)
                    cityData1(e)
                }} >
                <option value="select">Select</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
            </select>
                <h1>You  have selected -- 
                {   
                    cityData
                }
                
                </h1>
            <select name='city' onChange={(e)=>{cityHandler(e)}}>
                <option value="Select">Select</option>
                {
                    data.filter((x)=>{
                        if (x.state === 'Gujarat')
                            return true
                        else
                            return false
                    }).map((c)=>{
                        console.log('c--',c)
                        for(var i=0;i<c.city.name.length;i++)
                        {
                            console.log('lll--',c.city.name[i]);
                            <option value={c.city.name[i]}>{c.city.name[i]} </option>
                        }

                    })
                }
            </select>
        </div>
        
    </form>
    
    </div>
  )
}
