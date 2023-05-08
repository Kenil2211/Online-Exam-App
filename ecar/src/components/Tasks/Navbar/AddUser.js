import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Redirect, useNavigate } from 'react-router';

export const AddUser = () => {

    const { register, handleSubmit } = useForm()

    var navigate = useNavigate()

    const addUser = async (data) => {

        console.log('data--', data)
        var res = await axios.post('http://localhost:3001/user/user', data)
        console.log('res---', res.data)
        toast.success('User ADDED!!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        navigate('/')
    }

    return (

        <div>
            AddUser
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div>
                <form onSubmit={handleSubmit(addUser)}>
                    Name : <input type='text'  {...register('name')} /> <br />
                    Email : <input type='email'  {...register('email')} /> <br />
                    password : <input type='text'  {...register('password')} /> <br />
                    Age : <input type='text'  {...register('age')} /> <br />
                    isActive : <input type='text'  {...register('isActive')} /> <br />
                    <input type='submit' value='Add new user' />
                </form>
            </div>
        </div>
    )
}
