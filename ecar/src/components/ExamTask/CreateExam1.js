import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Questions_F } from './Questions_F'
import { Questions_M } from './Questions_M'
import { Questions_F1 } from './Questions_F1'

export const CreateExam1 = (props) => {

    const [ename, setEname] = useState('')
    const [questions, setQuestions] = useState([])
    const [flag, setFlag] = useState(false)
    const [qid, setqid] = useState('')
    const [mode, setmode] = useState('select')

    const location = useLocation()
    const { state } = location

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = (data) => {
        alert('submit')
    }

    const uploadQuestions = (q) => {

        if (q === 'manual') {
            // document.getElementById('mode').style.display = 'block'
            document.getElementById('file').style.display = 'none'

            document.getElementById('manual').style.display = 'block'
            console.log('selected--', q)
            console.log('ename--', ename)

            setmode('manual')
        }
        if (q === 'file') {
            // document.getElementById('mode').style.display = 'block'
            document.getElementById('manual').style.display = 'none'

            document.getElementById('file').style.display = 'block'


            setmode('file')
        }
        if (q === 'select') {

            document.getElementById('mode').style.display = 'none'
            setmode('select')
        }

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

    const isDataAvailable =()=>{

        if(props && props.data)
        {
            
            props.data?setEname(props.data.ename):setEname('null')
            props.data?setqid(props.data.qid):setqid([])
            console.log('data avilable after upload',props)
            document.getElementById('mode').style.display='none'
            alert('available')
        }
        else
        {
            console.log('not avilable')
        }

    }

    useEffect(() => {

    isDataAvailable()

    }, [])
    

    return (

        <div>

            <h2>
                CreateExam
            </h2>
            <br /><br />
            <form onSubmit={handleSubmit(submit)}>

                {
                    flag ? <>Exam Name : <input type='text' id='ename' name="ename" value={ename} disabled /> <br /><br /> </>
                        : <>Exam Name : <input type='text' id='ename' name="ename" onChange={(e) => { enameHandler(e.target.value) }} /> <br /><br /></>
                }

                Add Questions :<select id='mode' onChange={(e) => { uploadQuestions(e.target.value) }} required disabled>
                    <option value="select">Select</option>
                    <option value="file">Using File</option>
                    <option value="manual">Manually Add Questions</option>
                </select>
                <br /><br />
                {
                    flag ? <div id='newexam'>
                        <input type='submit' className='btn btn-primary' value="Create Exam" />
                    </div> : ""
                }
            </form>
            <div id='mode' >
                <div id='file' style={{display:'none'}}>
                    {
                        localStorage.getItem("flag-f")==true? <></>:<Questions_F1 ename={ename}/>
                    }
                </div>
                <div id='manual' style={{display:'none'}}>
                    <Questions_M />
                </div>
            </div>
        </div>
    )
}
