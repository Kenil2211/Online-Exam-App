import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Exam = () => {

    const [exams, setexams] = useState([])


    const getExams = () => {
        axios.get('http://localhost:3001/exam/getallexams').then((res) => {
            setexams(res.data.data)
        })
    }

    const displayTest = (id) => {
        alert(id)
    }

    useEffect(() => {
        getExams()

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
                                    <Link to={`/exam/${e._id}`} className='btn btn-primary' >
                                        Attempt
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )
}
