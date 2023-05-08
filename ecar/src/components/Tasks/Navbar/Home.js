import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { AddUser } from './AddUser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateUser } from './UpdateUser'

export const Home = () => {

    const [users, setusers] = useState([])
    const [loader, setLoader] = useState(true)
    const { register, handleSubmit } = useForm()

    const getAllUsers = () => {

        axios.get('http://localhost:3001/user/user').then((res) => {

            setLoader(false)
            setusers(res.data.data)

        })

    }

   

    const deleteUser = (uid) => {

        axios.delete(`http://localhost:3001/user/deleteuser/${uid}`).then((res) => {
            if (res.status === 204) {
                //alert("User Deleted");
                toast.success('User DELETED!!', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        })
    }

    useEffect(() => {

        getAllUsers()

    }, [users])



    return (
        <div>
            Home
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <ul>
                <li>
                    <Link to='contact'>Contact Us</Link>
                </li>
                <li>
                    <Link to='about' > About Us</Link>
                </li>
                <br />
                <button>
                    <Link to='/addnewuser'>ADD USER</Link>
                </button>
                <div>
                    {
                        loader ? <h1>Loading...</h1> : null
                    }

                    <table border='2' >

                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        {
                            users?.map((user) => {
                                return (
                                    <tr>
                                        <th scope="row">{user._id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <a
                                                onClick={() => {
                                                    deleteUser(user._id);
                                                }}
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </a>
                                        </td>
                                        <td>
                                            <Link to={`/updateuser/${user._id}` } className='btn btn-outline-secondary' > 
                                               Update
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                    </table>
                </div>
            </ul >
        </div >
    )
}
