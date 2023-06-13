import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Questions_F = (props) => {

    const { register, handleSubmit } = useForm()
    const [resFile, setresFile] = useState()
    const [flag1, setFlag1] = useState(false)

    const submit = (data) => {

        toast.success('File Uploaded Successfully!!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        var formData = new FormData()
        formData.append('file', data.file[0])
        console.log('submit called', data)

        axios.post(`http://localhost:3001/upload/upload`, formData).then((res) => {
            setresFile(res.data)
            console.log('res of file--', resFile)
            // props.useuploadHandler(resFile)

        })

        alert('upload..')
        console.log('file uploaded', data)

    }

    
    const uploadHandler1 = () => {
        if (window.confirm('Are you sure you want to upload the chosen File!!')) {

            console.log('confirm')
            // setFlag1(true)
        } else {
            console.log('confirm')
            console.log('not')
        }
    }

    return (
        <div>

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

            <br />
            <h5>
                Upload Questions Using A File
            </h5>


            <form onSubmit={handleSubmit(submit)} encType='multipart/form-data'>
                <br />
                
                    <input type="file" id='question_file' name="file" {...register("file")} onChange={() => { uploadHandler1() }} /> <br /><br /><br />
                <input type='submit' value='upload' />
                {
                    flag1 ? <input type="submit" value="Upload" className='btn btn-outline-danger' /> : ""
                }
            </form>
                
        </div>
    )
}
