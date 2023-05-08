import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const LoginUser = () => {

    const { register, handleSubmit } = useForm()
    const [role, setrole] = useState('')
    const [userName, setuserName] = useState('')

    const navigate = useNavigate()

    const submit = (data) => {
        console.log(data)
        var tmp ={
            "email":Object.values(data)[0],
            "password":Object.values(data)[1]
        }
        axios.post('http://localhost:3001/examuser/validuser',tmp).then((res)=>{
            if(res.data.data)
            {
                console.log('res.data.data.role-',res.data.data.role)
                setrole(res.data.data.role)
                setuserName(res.data.data.name)
                
                localStorage.setItem("uid", res.data.data._id);

            }
        })
    }

    return (
        <div>
            <h2>
                LoginUser
            </h2>
            <br /><br />

            <form onSubmit={handleSubmit(submit)}>
                Email &nbsp;&nbsp;&nbsp;&nbsp;:   <input type='email' name='email' {...register('email')} /> <br /><br />   
                Password : <input type='text'  {...register('password')} /> <br /> <br /><br />    
                <input type='submit' value="Login" className='btn btn-secondary' />
            </form>
        </div>
    )
}
