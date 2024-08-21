import React from 'react'
import './QuizResult.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { currentQuizQuestionAction } from '../../store/currentQuizQuestion';
import { totalScoreAction } from '../../store/totalScore';
function QuizResult({ subInd, data, SetSubInd }) {

    const score = useSelector(store => store.score);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePlayAgainbtn = () => {

        dispatch(currentQuizQuestionAction.currentQuestion(0));
        dispatch(totalScoreAction.addScore(0));
        navigate('/quiz')
    }

    return (
        <div className='quiz-result'>
            <div>
                <p>Quiz completed</p>
                <h1>You scored...</h1>
            </div>
            <div>
                <div>
                    <div>
                        <figure style={{ '--background-color': `${data.quizzes[subInd].background}` }}>
                            <img src={data.quizzes[subInd].icon} alt={data.quizzes[subInd].title} />
                        </figure>
                        <div>{data.quizzes[subInd].title}</div>
                    </div>
                    <div>{score}</div>
                    <div>out of 10</div>
                </div>
                <button onClick={handlePlayAgainbtn}>Play Again</button>
            </div>
        </div>
    )
}

export default QuizResult
