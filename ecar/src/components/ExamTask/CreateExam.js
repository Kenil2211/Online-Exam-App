import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Questions_F1 } from './Questions_F1'
import { Questions_M } from './Questions_M'
import { Questions_F } from './Questions_F'

export const CreateExam = () => {

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

        //add a new exam to Db
        var qid_array = qid.split(',')
        console.log('qids', qid_array)

        var newExam = {
            name: ename,
            questions: qid_array
        }
        console.log('submit called', newExam)
        axios.post('http://localhost:3001/exam/create', newExam).then((res) => {
            console.log('res of exam', res)
        })

        toast.success('Exam Created Successfully!!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });


        localStorage.removeItem("qid")
        // localStorage.removeItem("flag-f")
        // localStorage.removeItem("ename")

        setTimeout(() => {
            navigate('/getexams')
        }, 3000);
    }


    const modeHandler = (q) => {
        console.log('mode selected==', q)
        if (q === 'manual') {
            setmode('manual')
        }
        if (q === 'file') {
            setmode('file')
        }
        if (q === 'select') {
            setmode('select')
        }
    }

    const isFlagAvailable = () => {
        // setFlag(localStorage.getItem('flag-f'))
        console.log('flaggg', flag)

        if (flag == true) {
            console.log('flagggg')
        }
    }

    const uploadQuestionFile = async (data) => {

        
        console.log('data received from Q_F---', data)
        var qids = []




        // await axios.post('http://localhost:3001/upload/questions', {
        //     'path': data.file.path
        // }).then((res1) => {

        //     res1.data.data.map((d) => {
        //         qids.push(d._id)
        //     })
        //     console.log('qids ', qids)

        //     localStorage.setItem('flag-f', true)

        // })



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
        modeHandler()
        isFlagAvailable()
    }, [flag])


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
            <h2>
                CreateExam
            </h2>
            <br /><br />
            <form onSubmit={handleSubmit(submit)}>

                {
                    flag ? <>Exam Name : <input type='text' id='ename' name="ename" value={ename} disabled /> <br /><br /> </>
                        : <>Exam Name : <input type='text' id='ename' name="ename" onChange={(e) => { enameHandler(e.target.value) }} /> <br /><br /></>
                }

                Add Questions :<select id='mode' onChange={(e) => { modeHandler(e.target.value) }} required disabled>
                    <option value="select">Select</option>
                    <option value="file">Using File</option>
                    <option value="manual">Manually Add Questions</option>
                </select>
                <br /><br />
                {
                    mode === 'file' ? <Questions_F /> : <></>
                }
                {
                    mode === 'manual' ? <Questions_M /> : <></>
                }

                {
                    flag ? <div id='newexam'>
                        <input type='submit' className='btn btn-primary' value="Create Exam" />
                    </div> : ""
                }

            </form>
        </div>
    )
}
