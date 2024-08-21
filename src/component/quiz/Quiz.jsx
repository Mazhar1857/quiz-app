import React, { useEffect, useState } from 'react'
import './Quiz.css'
import QuizHome from './QuizHome'
import data from '../../data.json'
import QuizQuestion from './QuizQuestion'
import QuizResult from './QuizResult'
import { Routes, Route } from 'react-router-dom'
import QuizHeader from './QuizHeader'
import { useSelector } from 'react-redux'
const Quiz = () => {
    const subject = useSelector(store => store.subject);
    const [subInd, SetSubInd] = useState(null);


    


    useEffect(() => {
        SetSubInd(() => {
            return (data && data.quizzes.findIndex((item) => item['title'] == subject))
        })

    }, [subject])

    useEffect(() => {
        // console.log(subject + ' and ' + subInd);
    }, [subInd, subject])

    return (
        <div className='quiz'>
            <section className='quiz-header-section'>
                <QuizHeader data={data} subInd={subInd}>
                    dropdown
                </QuizHeader>
            </section>
            <Routes>
                <Route path='/' element={<QuizHome data={data} />} />
                <Route path='quiz-questions' element={<QuizQuestion data={data} subInd={subInd}  />} />
                <Route path='quiz-results' element={<QuizResult subInd={subInd} data={data}  SetSubInd={SetSubInd} />} />
            </Routes>
        </div>
    )
}

export default Quiz
