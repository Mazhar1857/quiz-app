import React, { useEffect, useState } from 'react'
import './QuizQuestion.css'
import ProgressBar from './ProgressBar'
import { useDispatch, useSelector } from 'react-redux'
import { currentQuizQuestionAction } from '../../store/currentQuizQuestion'
import { totalScoreAction } from '../../store/totalScore'
import { useNavigate } from 'react-router-dom'

const QuizQuestion = ({ data, subInd }) => {

    const currQue = useSelector(store => store.currentQuizQuestion);
    const navigate = useNavigate();


    const dispatch = useDispatch();
    const [yourAns, setYourAns] = useState('');
    const [answer, setAnswer] = useState('');
    const [totalQue, setTotalQue] = useState('');

    const [selected, setSelected] = useState(false);
    const [result, setReult] = useState(null);
    const [selectedOpt, setSelectedOpt] = useState(null);
    const [correctOpt, setCorrectOpt] = useState(null);


    const [msg, setMsg] = useState(false);


    const handleSubmit = () => {
        if (!selected && selectedOpt !== null) {
            setYourAns((subInd !== null && subInd !== -1) && data.quizzes[subInd].questions[currQue].options[selectedOpt]);
            setSelected(true);
        } else {
            setMsg(true);
        }
    }

    useEffect(() => {
        setMsg(false);
    }, [selectedOpt])

    const handleNext = () => {
        if (currQue < (totalQue - 1)) {
            dispatch(currentQuizQuestionAction.currentQuestion(currQue + 1))
        }

        if (currQue == (totalQue - 1)) {
            navigate('/quiz/quiz-results')
        }

        setSelected(false);
        setReult(null);
        setSelectedOpt(null);
        setCorrectOpt(null);
    }

    const handleSelection = (ind) => {
        if (!selected) {
            setSelectedOpt(ind);
        }
    }

    useEffect(() => {
        setAnswer((subInd !== null && subInd !== -1) && data.quizzes[subInd].questions[currQue].answer)
        setCorrectOpt((subInd !== null && subInd !== -1) && data.quizzes[subInd].questions[currQue].options.findIndex((item) => {
            return (item === answer);
        }))
    }, [currQue, subInd, answer])



    useEffect(() => {
        setTotalQue((subInd !== null && subInd !== -1) && data.quizzes[subInd].questions.length);
    }, [subInd])


    useEffect(() => {
        if (selected) {

            if (answer === yourAns) {
                setReult(true);
                dispatch(totalScoreAction.addScore());
            } else {
                setReult(false);
            }
        }
    }, [selected])


    return (
        <div className='quiz-question'>
            <div>
                <div>
                    <p>Question <span>{currQue + 1}</span> of 10</p>
                    <h1>{(subInd !== null && subInd !== -1) && (data.quizzes[subInd].questions[currQue].question)}</h1>
                </div>
                <div><ProgressBar curr={currQue + 1} total={totalQue} /></div>
            </div>

            <div className='options'>
                <div className={`option ${(result === true && selectedOpt === 0) ? 'correct' : ''}  ${(result === false && selectedOpt === 0) ? 'incorrect' : ''}  ${(result === false && correctOpt === 0 && selectedOpt !== null) ? 'correctans' : ''} ${(selected === false && selectedOpt === 0) ? 'selected' : ''}`} onClick={() => handleSelection(0)}  >
                    <div>A</div>
                    <div>{(subInd !== null && subInd !== -1) && data.quizzes[subInd].questions[currQue].options[0]}</div>
                </div>
                <div className={`option ${(result === true && selectedOpt === 1) ? 'correct' : ''}  ${(result === false && selectedOpt === 1) ? 'incorrect' : ''}  ${(result === false && correctOpt === 1 && selectedOpt !== null) ? 'correctans' : ''} ${(selected === false && selectedOpt === 1) ? 'selected' : ''}`} onClick={() => handleSelection(1)}>
                    <div>B</div>
                    <div>{(subInd !== null && subInd !== -1) && data.quizzes[subInd].questions[currQue].options[1]}</div>
                </div>
                <div className={`option ${(result === true && selectedOpt === 2) ? 'correct' : ''}  ${(result === false && selectedOpt === 2) ? 'incorrect' : ''}  ${(result === false && correctOpt === 2 && selectedOpt !== null) ? 'correctans' : ''} ${(selected === false && selectedOpt === 2) ? 'selected' : ''}`} onClick={() => handleSelection(2)}>
                    <div>C</div>
                    <div>{(subInd !== null && subInd !== -1) && data.quizzes[subInd].questions[currQue].options[2]}</div>
                </div>
                <div className={`option ${(result === true && selectedOpt === 3) ? 'correct' : ''}  ${(result === false && selectedOpt === 3) ? 'incorrect' : ''}  ${(result === false && correctOpt === 3 && selectedOpt !== null) ? 'correctans' : ''} ${(selected === false && selectedOpt === 3) ? 'selected' : ''}`} onClick={() => handleSelection(3)}>
                    <div>D</div>
                    <div>{(subInd !== null && subInd !== -1) && data.quizzes[subInd].questions[currQue].options[3]}</div>
                </div>
                <button className={`btn ${selected === true ? 'hide' : ''}`} onClick={handleSubmit}>Submit Answer</button>
                <button className={`btn ${selected === true ? '' : 'hide'}`} onClick={handleNext}>Next Question</button>
                <div className={`msg ${msg ? 'show' : 'hide'}`}>
                    <div>
                        Please select an answer
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizQuestion
