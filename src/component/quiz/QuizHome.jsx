import React, { useEffect } from 'react'
import './QuizHome.css'
import { useDispatch, useSelector } from 'react-redux'
import { quizSubjectAction } from '../../store/quizSubjectSlice';
import { useNavigate } from 'react-router-dom';
const QuizHome = ({ data }) => {
    const dispatch = useDispatch();
    const subject = useSelector(store => store.subject)
    const navigation = useNavigate();

    const handleQuizSubject = (sub) => {
        dispatch(quizSubjectAction.addSubject(sub))
        navigation('quiz-questions');
    }

    return (
        <div className='quiz-home'>
            <div>
                <div>Welcome to the </div>
                <div>Frontend Quiz!</div>
                <p>Pick a subject to get started.</p>
            </div>
            <div>
                {data.quizzes.map((item, index) => {
                    return <div onClick={() => handleQuizSubject(item.title)} key={index}>
                        <figure style={{ '--background-color': `${item.background}` }}>
                            <img src={item.icon} alt={`${item.title} logo`} />
                        </figure>
                        <div>
                            {item.title}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default QuizHome
