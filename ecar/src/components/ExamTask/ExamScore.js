import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const ExamScore = () => {

    const [marks, setmarks] = useState(0)
    const [totalMarks, settotalMarks] = useState(0)

    const eid = useParams().id
    const uid = localStorage.getItem("uid")

    console.log('--->>', eid, 'uidddddd-', uid)

    const getTotal = ()=>{
        axios.get(`http://localhost:3001/exam/getexam/${eid}`).then((res)=>{
            settotalMarks(res.data.data.questions.length)
            console.log('total--',totalMarks)
        })
    }


    const getExamAnswers = () => {

        axios.get(`http://localhost:3001/examresult/calresult/${uid}/${eid}`).then((res) => {
            setmarks(res.data.marks)
            if (marks>=0) {
                var exam_result = {
                    uid:uid,
                    exam: [
                        {
                            "eid": eid,
                            "result": marks
                        }
                    ]
                }
                setMarksToDb(exam_result)
            }
        })
    }

    const setMarksToDb = (exam_data) => {

        axios.post(`http://localhost:3001/examresult/addresult/${uid}/${eid}`, exam_data).then((res) => {
            console.log('exam result updated to db..')
        })
    }

    useEffect(() => {
        getExamAnswers()
        getTotal()
    }, [])


    return (
        <div>
            <h4>Your Exam Score is : </h4>
            <h2>{marks} / {totalMarks}</h2>

        </div>
    )
}
