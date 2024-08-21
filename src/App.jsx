import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import Quiz from './component/quiz/Quiz'
import InterviewQuestion from './component/interviewQuestions/InterviewQuestion'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz/*' element={<Quiz />} />
        <Route path='/interview-questions' element={<InterviewQuestion />} />
      </Routes>
    </div>
  )
}

export default App
