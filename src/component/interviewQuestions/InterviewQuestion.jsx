import React from 'react'
import './InterviewQuestion.css'
import { useNavigate } from 'react-router-dom'
const InterviewQuestion = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/')
    }

    return (
        <div className='interview-question'>
            comming soon till you can checkout quiz!
            <button onClick={handleNavigation}>back to home</button>
        </div>
    )
}

export default InterviewQuestion
