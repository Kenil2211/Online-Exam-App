import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Student = () => {
  
    const {register,handleSubmit,formState:{errors}} = useForm()

    const [errors1, seterrors1] = useState('')

    const validationSchema = {
        fname:{
            required:{
                value:true,
                message:"first name is required"
            }
        },
        age:{
            min:{
                value:18,
                message:"minimum 18 years"
            }
        }
    }

    const submit=(data)=>{

        if(errors===null)
        {
            document.getElementById('sub').disabled=false
        }
        console.log('data',data)
        console.log('errors ',errors)
    }

    return (
    <div>
        Student
        <form onSubmit={handleSubmit(submit)}>
        <div>
            <label>First Name</label>
            <input type="text" {...register("fname",validationSchema.fname)}/>
            {
                 <span>{errors?.fname?.message}</span>
            }
        </div>
        <div>
            <label>Enter age</label>
            <input type="text" {...register("age",validationSchema.age)}/>
            {
                <span>
                    {
                        errors?.age?.message
                    }
                </span>
            }
        </div>
        
        <div>
            <input type="submit" value="ADD" disabled="disabled" id='sub'></input>
        </div>
        </form>
        
    
    </div>
  )
}
