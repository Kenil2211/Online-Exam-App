import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AttemptExam1 = () => {

    var eid = useParams().id

    const { register, handleSubmit } = useForm()

    const [questions, setquestions] = useState([])

    const navigate = useNavigate()


    const getAllQuestionId = (eid) => {

        axios.get(`http://localhost:3001/exam/getexam/${eid}`).then((res) => {
            console.log('--->', res.data.data.questions)
            setquestions(res.data.data.questions)
        })


    }

    const submit = async (answers) => {
        toast.success('Exam Submitted Successfully!!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        console.log('-->submitted answers', answers)
        // console.log(Object.keys(answers))

        const submittedAnswers = Object.assign({ answers })
        // console.log('submittedAnswers-->', submittedAnswers)
        // console.log("values--->",Object.values(answers))

        var answers1 = []

        // questions.map((q)
        Object.keys(answers).map((q, index) => {

            var correctAnswer = questions?.map((ques) => {
                if(q===ques._id)
                    return (ques.options[ques.answer]) 
            })

            correctAnswer= correctAnswer.filter((x)=>{
                if(x===undefined)
                {
                    return false;
                }
                return true;
            })

            console.log('correct answer--',correctAnswer)
            console.log('qid-',q,'true answer-',correctAnswer[0])
            var examData =
            {
                qid: q,
                givenAnswer: Object.values(answers)[index],
                correctAnswer: correctAnswer[0]
            }

            answers1.push(examData)
        })
        var examData1 = {
            uid: "63b1c79c881bd05b9c192b5b",
            eid: eid,
            answers: answers1
        }

        console.log("===", examData1)

        await axios.post(`http://localhost:3001/examhistory/addexam`, examData1).then((res) => {
            console.log('res', res.status)
        })

        setTimeout(() => {
            navigate(`/examscore/${eid}`)
        }, 1500);

        // navigate(`/examscore/${eid}`)
    }

    useEffect(() => {
        getAllQuestionId(eid)

    }, [])

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
            <h2>Attempt Exam</h2>

            <form onSubmit={handleSubmit(submit)} >

                <table style={{
                    "margin-left": "auto",
                    "margin-right": "auto"
                }} >

                    {
                        questions?.map((q) => {
                            return (
                                <>
                                    <br />
                                    <tr>
                                        <td>
                                            Q.&nbsp;{q.question}
                                        </td>
                                    </tr>
                                    {
                                        q.options.map((op) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <input type='radio' name={q._id} value={op} {...register(q._id)} />
                                                            {op}
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }

                                </>
                            )
                        })
                    }
                    <tr>
                        <td>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </td>
                    </tr>
                </table>

            </form>
        </div>
    )
}
