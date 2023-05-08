import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Questions_M = () => {

    const ename = useParams().ename
    const [questionsAdded, setQuestionsAdded] = useState(0)

    const addQuestionHandler = () => {
        console.log('hi')
    }

    return (
        <div>
            <h2>
                Exam Name : {ename}
            </h2>
            <span>
                <Link to={`/questions/view`} >
                    View Questions( <span>{questionsAdded?questionsAdded:0}</span> ) 
                </Link>
            </span>
            <h5>
                Add Questions
            </h5>
            <br /><br />
            <form>
                <div>
                    <label htmlFor='question'>Question </label>
                    <input type='text' name='question' size='50' required></input><br /> <br />
                </div>
                <div>
                    <label htmlFor='opt1' style={{ margin: '15px' }}>Option1</label> &nbsp;&nbsp;&nbsp;
                    <input type='text' name='opt1' required></input>
                </div>
                <div>
                    <label htmlFor='opt2' style={{ margin: '20px' }}>Option2</label> &nbsp;&nbsp;&nbsp;
                    <input type='text' name='opt2' required></input>
                </div>
                <div>
                    <label htmlFor='opt3' style={{ margin: '20px' }}>Option3</label> &nbsp;&nbsp;&nbsp;
                    <input type='text' name='opt3' required></input>
                </div>
                <div>
                    <label htmlFor='opt4' style={{ margin: '20px' }}>Option4</label> &nbsp;&nbsp;&nbsp;
                    <input type='text' name='opt4' required></input>
                </div>
                <div>
                    <span>
                        <p><strong> Correct Answer</strong></p>
                    </span>
                    <span style={{ marginRight: '10px', marginLeft: '10px' }}>
                        <input type="radio" id="html" name="question" value="0" required />
                        <label for="html" style={{ marginLeft: '10px' }} >Option1</label>
                    </span>
                    <span style={{ marginRight: '10px', marginLeft: '10px' }}>
                        <input type="radio" name="question" value="1" required />
                        <label for="html" style={{ marginLeft: '10px' }}>Option2</label>
                    </span>
                    <span style={{ marginRight: '10px', marginLeft: '10px' }}>
                        <input type="radio" name="question" value="2" required />
                        <label for="html" style={{ marginLeft: '10px' }}>Option3</label>
                    </span>
                    <span style={{ marginRight: '10px', marginLeft: '10px' }}>
                        <input type="radio" name="question" value="3" required />
                        <label for="html" style={{ marginLeft: '10px' }}>Option4</label>
                    </span>
                </div>
                <br />
                <div>
                    <input type='button' onClick={(e) => { addQuestionHandler(e) }} value="Add Question" className='btn btn-danger' />
                </div>
            </form>
        </div>
    )
}
