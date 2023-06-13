import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Exam = () => {

    const uid = localStorage.getItem('uid')

    const [attempFlag, setattempFlag] = useState(false)
    const [exams, setexams] = useState([])
    const [attemptedExamsId, setattemptedExamsId] = useState([])


    const getExams = () => {
        axios.get('http://localhost:3001/exam/getallexams').then((res) => {
            console.log('exams ', res.data.data)
            setexams(res.data.data)
        })
    }

    const attemptedExams = () => {
        axios.get(`http://localhost:3001/examresult/getresults/${uid}`).then((res) => {

            console.log("attempted exam id ==", res.data.data[0].exam)
            // setattemptedExamsId(res.data.data[0].exam)
        })
    }

    useEffect(() => {
        getExams()

        attemptedExams()
    }, [])


    return (
        <div>
            Exams
            <table border='2' align='center' cellPadding={"10px"}>

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Questions</th>
                    <th>Give Test</th>
                </tr>
                {
                    exams?.map((e) => {
                        return (
                            <tr>

                                <th scope="row">{e._id}</th>
                                <td>{e.name}</td>
                                <td>{e.questions.length}</td>
                                <td>
                                    <button className='btn btn-primary'>
                                        <Link to={`/exam/${e._id}`} style={{color:'white'}} >
                                            Attempt
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )
}
