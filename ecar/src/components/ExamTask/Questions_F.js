import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Questions_F = () => {

    const ename = useParams().ename
    
    const { register, handleSubmit } = useForm()
    const [flag, setFlag] = useState(false)
    
    var qids=[]
    
    const [flag1, setFlag1] = useState(false)

    const navigate = useNavigate()

    const submit = async (data) => {

        var formData = new FormData()
        formData.append('file', data.file[0])
        console.log('submit called', data)

        await axios.post('http://localhost:3001/upload/upload', formData).then((res)=>{
            
            axios.post('http://localhost:3001/upload/questions', {
                'path': res.data.file.path
            }).then((res1)=>{
                setFlag(true)
                // console.log('ressss',res1.data)
                res1.data.data.map((d)=>{
                    qids.push(d._id)
                })
                localStorage.setItem('qid',qids)
                localStorage.setItem('flag-f',true)
                localStorage.setItem('ename',ename)
            })
        })
        navigate(-1)
    }

    const uploadHandler = () =>{
        setFlag1(true)
    }

    return (
        <div>
            <h2>
                Exam Name : {ename}
            </h2>
            <br/><br/><br/>
            <h5>
                Upload Questions Using A File
            </h5>


            <form onSubmit={handleSubmit(submit)} encType='multipart/form-data'><br />
                <input type="file" name="file" {...register("file")} onChange={()=>{uploadHandler()}}/> <br /><br /><br />

                {
                    flag1? <input type="submit" value="Upload" className='btn btn-outline-danger' />: ""
                }
            </form>

        </div>
    )
}
