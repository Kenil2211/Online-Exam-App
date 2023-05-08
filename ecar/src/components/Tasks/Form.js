import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './Form.css'


export const Form = () => {

    const {register,handleSubmit,formState:{errors,} } = useForm({
        mode:'onChange'
    })

    const checkError =()=>
    {
        if(JSON.stringify(errors) === "{}")
        {
            alert('hi')
        }
        else{
            alert('bye')
        }
    }
    
    console.log('errors-->',errors)
    

    const submit = (data)=>
    {
        console.log('submit-',data)
    }
    
    const validationSchema = {
        
        uname:{
            required:{
                value:true,
                message:"*required"
            }
        },
        pwd:{
            required:{
                value:true,
                message:"*required"
            },
            minLength:{
                value:8,
                message:"Minimum length of password is 8."
            },
            maxLength:{
                value:12,
                message:"Maximum length of pwd is 12."
            }
        }
    }

    return (
    <div>
        Form
        <form onSubmit={handleSubmit(submit)} >
            <div>
                <input type='text' placeholder='UserName' {...register('uname',validationSchema.uname) } onChange={()=>{checkError()}} />
                <span>{errors?.uname?.message}</span>
            </div>
            <div>
                <input type='text' placeholder='Password' {...register('pwd',validationSchema.pwd)} onChange={()=>{checkError()}}/>
                <span>{errors?.pwd?.message}</span>
            </div>            
            <div>
                <input type='submit' value='PROCEED' id='btn' />
            </div>
        </form>
        

    </div>
  )
}
