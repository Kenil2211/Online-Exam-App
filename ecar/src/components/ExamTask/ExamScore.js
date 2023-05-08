import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const ExamScore = () => {

    const [marks, setmarks] = useState(0)
    const [uid, setUid] = useState('')

    const eid = useParams().id

    console.log('--->>', eid)

    const getUid = () => {
        setUid(localStorage.getItem("uid"))
        console.log('uid -exam score--',uid)
    }

    const getExamAnswers = async () => {

        await axios.get(`http://localhost:3001/examresult/calresult/${uid}/${eid}`).then((res) => {
            setmarks(res.data.marks)
        })

        if(marks)
        {
            var exam_result = {
                userId: {
                    uid
                },
                exam: [
                    {
                        "eid": eid,
                        "result": marks
                    }
                ]
            }
            console.log('result--',exam_result)
    
            await axios.post(`http://localhost:3001/examresult/addresult/${uid}/${eid}`,exam_result).then((res)=>{
                console.log('exam result updated to db..')
            })
        }
        
    }


    useEffect(() => {
        getExamAnswers()
    }, [])


    return (
        <div>
            <h4>Your Exam Score is : </h4>
            <h2>{marks}</h2>

        </div>
    )
}
