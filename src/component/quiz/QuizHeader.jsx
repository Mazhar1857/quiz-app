import React from 'react'
import './QuizHeader.css'
import { useSelector } from 'react-redux'

const QuizHeader = ({ data, children, subInd }) => {

    const subject = useSelector((store) => store.subject);

    return (
        <div className='quiz-header'>
            {(subInd === null || subInd === -1 || subject === null) ? children : <div>
                <figure style={{ '--background-color': `${data.quizzes[subInd].background}` }}>
                    <img src={data.quizzes[subInd].icon} alt={data.quizzes[subInd].title} />
                </figure>
                <div>{data.quizzes[subInd].title}</div>
            </div>}
            <div>Quizzes</div>
        </div>
    )
}

export default QuizHeader
