import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

export const CreateExam = () => {

    const [ename, setEname] = useState('')
    const [questions, setQuestions] = useState([])
    const [flag, setFlag] = useState(false)
    const [qid, setqid] = useState('')
    
    
    
    const { register, handleSubmit } = useForm()

    const submit = (data) => {
        
        //add a new exam to Db
        var qid_array=qid.split(',')
        console.log('qids',qid_array)

        var newExam = {
            name:ename,
            questions:qid_array
        }
        console.log('submit called',newExam)   
        axios.post('http://localhost:3001/exam/create',newExam).then((res)=>{
            console.log('res of exam',res)
        })
    }

    const navigate = useNavigate()

    const uploadQuestions = (q) => {

        if (q === 'manual') {
            console.log('selected--', q)
            console.log('ename--', ename)

            navigate(`/questions/manual/${ename}`)
        }
        if (q === 'file') {
            navigate(`/questions/file/${ename}`)
        }

    }

    const isFlagAvailable=()=>{
        setFlag(localStorage.getItem('flag-f'))
        setqid(localStorage.getItem('qid'))
        setEname(localStorage.getItem('ename'))
    }

    const enameHandler = (ename) => {
        setEname(ename)
        console.log('ename', ename)
        if (document.getElementById('ename').value === '') {
            document.getElementById('mode').disabled = true
        } else {
            document.getElementById('mode').disabled = false
        }
    }

    

    useEffect(() => {
        uploadQuestions()
        isFlagAvailable()
        
    }, [])


    return (
        <div>
            <h2>
                CreateExam
            </h2>
            <br /><br />
            <form onSubmit={handleSubmit(submit)}>

                {
                    flag? <>Exam Name : <input type='text' id='ename' name="ename" value={ename} disabled /> <br /><br /> </>
                    : <>Exam Name : <input type='text' id='ename' name="ename" onChange={(e) => { enameHandler(e.target.value) }} /> <br /><br /></>
                }
                
                Add Questions :<select id='mode' onChange={(e) => { uploadQuestions(e.target.value) }} required disabled>
                    <option value="">Select</option>
                    <option value="file">Using File</option>
                    <option value="manual">Manually Add Questions</option>
                </select>
                <br /><br />
                {
                    flag ? <div id='newexam'>
                        <input type='submit' className='btn btn-primary' value="Create Exam" />
                    </div> :""
                }

            </form>
        </div>
    )
}
