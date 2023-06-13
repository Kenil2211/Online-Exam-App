import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const MyExams = () => {

    const uid = localStorage.getItem("uid")
    const [username, setusername] = useState('')
    const [exams, setExams] = useState([])
    const [allExams, setallExams] = useState([])

    const navigate = useNavigate()

    const getUserDetails = () => {

        axios.get(`http://localhost:3001/examuser/getuserbyid/${uid}`).then((res) => {
            setusername(res.data.data.name)
        })

    }

    const getPastExams = () => {

        axios.get(`http://localhost:3001/examresult/getresults/${uid}`).then((res) => {
            setExams(res.data.data)
            console.log('exams..-', res.data.data)
        })
    }

    //change approach in future // store in redux
    const getallExams = () => {
        axios.get('http://localhost:3001/exam/getallexams').then((res) => {
            setallExams(res.data.data)
            console.log('All exams data--', res.data.data)

        })
    }

    const previousPage = () => {
        navigate(-1)
    }

    useEffect(() => {
        getUserDetails()
        getPastExams()
        getallExams()

    }, [])


    return (
        <div>
            <h1>
                <span >
                    <Button onClick={() => { previousPage() }}>
                        <ArrowBackIcon />
                    </Button>
                </span>
                <span>
                    MyExams
                </span>
            </h1>
            <div>
                {
                    username ?
                        <span>
                            User Name : {username}
                        </span> : 'hello'
                }
                <div style={{ marginLeft: '18rem',marginTop:'2rem' }}>
                    <table border='2'>
                        <tr style={{ border: '2px solid black', paddingLeft: '2rem' }}>
                            <th>Exam Name</th>
                            <th style={{ paddingLeft: '3rem' }}>Exam Result</th>
                            <th style={{ paddingLeft: '3rem' }}>View Exam</th>
                        </tr>
                        {
                            exams?.map((e) => {
                                return (
                                    <>
                                        {
                                            e.exam.map((eobj) => {
                                                return (
                                                    <tr style={{ border: '3px solid black' }}>
                                                        <td style={{ alignContent: 'center' }}>
                                                            {
                                                                allExams ? allExams.find((e1) => {
                                                                    return e1._id == eobj.eid
                                                                })?.name : "Test"

                                                            }
                                                        </td>
                                                        <td style={{ alignContent: 'center', paddingLeft: '3rem' }}>
                                                            {eobj.result} <b>/ </b> 
                                                            {
                                                                allExams? allExams.find((e2)=>{
                                                                    return e2._id == eobj.eid
                                                                })?.questions.length : "nill"
                                                            }
                                                        </td>
                                                        <td style={{ paddingLeft: '2rem' }}>
                                                            <Link to={`/exam/history/${eobj.eid}`} className='btn btn-primary' >
                                                                View
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}
