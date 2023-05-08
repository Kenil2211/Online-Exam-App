import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateUser = () => {

    var id = useParams().id
    const [userData, setuserData] = useState({})

    const {register,handleSubmit} = useForm()

    const getUserData = (id) => 
    {
        alert('id--', id)
        console.log('id---', id)
        axios.get('http://localhost:3001/user/getuser/63a01c633d6d41c789d87b60').then((res) => {
            console.log('data--', res.data.data)
            setuserData(res.data.data)
        })
    }

    var navigate = useNavigate()
    const submit = (data) =>{
        alert('submit called..')
        console.log('-->',userData)
        navigate('/')
    }

    useEffect(() => {

        alert('i m useeffect')
        getUserData(id)

    }, [])


    return (
        <div>
            <h2>
                UpdateUser
            </h2>
            
                {
                    userData ?
                        <div>
                            <form onSubmit={handleSubmit(submit)}>
                                Name : <input type='text'  value={userData.name} {...register('name')} /> <br />
                                Email : <input type='email' value={userData.email} {...register('email')} /> <br />
                                password : <input type='text'  {...register('password')} /> <br />
                                Age : <input type='text'  {...register('age')} /> <br />
                                isActive : <input type='text'  {...register('isActive')} /> <br />
                                <input type='submit' value='Update User' />
                            </form>
                        </div>

                        : "data not found"
                }
            


        </div>
    )
}
