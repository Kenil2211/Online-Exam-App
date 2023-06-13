import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, ButtonBase, SvgIcon } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const ViewPastExam1 = () => {

    const eid = useParams().eid
    const uid = localStorage.getItem("uid")
    console.log('eid', eid)

    const [fullExamDetails, setfullExamDetails] = useState({})
    const [marks, setmarks] = useState(0)
    const [attempedExam, setattempedExam] = useState([])
    const [questions, setQuestions] = useState([])
    const [correctFlag, setcorrectFlag] = useState(false)
    const [style, setstyle] = useState()
    const [selected, setselected] = useState(false)
    const [totalMarks,setTotalMarks] = useState(0)

    const navigate = useNavigate()

    const getFullExamDetail =  async() => {

        await axios.get(`http://localhost:3001/exam/getexam/${eid}`).then((res) => {
            setfullExamDetails(res.data.data)
            setQuestions(res.data.data.questions)
            console.log('full exam ==', fullExamDetails)
            console.log('full questions ==', questions)
            setTotalMarks(res.data.data.questions.length)
        })
    }

    const style1 = {
        'background': 'red'
    }
    const style2 = {
        'background': 'green'
    }

    const getResult = () => {

        axios.get(`http://localhost:3001/examresult/${uid}/${eid}`).then((res) => {
            setmarks(res.data.data[0].result)
            // console.log('result--', res.data.data[0].result)
        })
    }

    const getAttemptedExam = async () => {

        await axios.get(`http://localhost:3001/examhistory/getexamhistory/${uid}/${eid}`).then((res) => {
            setattempedExam(res.data.data)
            console.log('attempted exam--', res.data.data)
        })
    }

    const previousPage = () => {
        navigate(-1)
    }

    useEffect(() => {

        getFullExamDetail()
        getResult()
        getAttemptedExam()
    }, [])

    return (
        <div>

            <h3>
                <span>
                    <Button onClick={() => { previousPage() }}>
                        <ArrowBackIcon />
                    </Button>
                </span>
                <span style={{ paddingLeft: '5rem', paddingRight: '5rem' }}>
                    Exam Name : &nbsp;{fullExamDetails ? fullExamDetails.name : "exam"}
                </span>

            </h3>
            <h3 style={{ color: 'red' }}>
                <span>Result : 
                    {
                        marks ? 
                        <> {marks} / {totalMarks}</>
                            : "result"
                    }
                </span>
            </h3>

            <table style={{ marginLeft: '20rem', border: '1px solid black' }}>
                {
                    questions?.map((q, i) => {
                        return (
                            <>
                                <tr style={{ border: '1px solid black' }}>
                                    <td>{i + 1}</td>
                                    <td style={{ textAlign: 'left' }}>{q.question}</td>
                                </tr>
                                {
                                    q.options.map((op) => {
                                        return (
                                            <>
                                                <tr>
                                                    {
                                                        attempedExam[i]?.givenAnswer == op
                                                            ?
                                                            <>
                                                                {
                                                                    attempedExam[i].givenAnswer == attempedExam[i].correctAnswer
                                                                        ?
                                                                        <td style={{ textAlign: 'center', background: ' lightgreen' }}>
                                                                            <input type='radio' name={q._id} value={op} checked />{op}
                                                                        </td>
                                                                        :
                                                                        <td style={{ textAlign: 'center', background: 'red' }}>
                                                                            <input type='radio' name={q._id} value={op} checked />{op}
                                                                        </td>
                                                                }
                                                            </>
                                                            :
                                                            <>
                                                                {
                                                                    attempedExam[i]?.correctAnswer === op ?
                                                                        <>
                                                                            <td style={{ textAlign: 'center', background: ' lightgreen' }}>
                                                                                <input type='radio' name={q._id} value={op} checked />{op}
                                                                            </td>
                                                                        </> :
                                                                        <td style={{ textAlign: 'center' }}>
                                                                            <input type='radio' name={q._id} value={op} disabled />{op}
                                                                        </td>
                                                                }
                                                            </>
                                                    }
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </table>
        </div>
    )
}
