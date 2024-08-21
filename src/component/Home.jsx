import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <Link to='/quiz'>
                <button>Frontend Quiz</button>
            </Link>
            <Link to='/interview-questions'>
                <button>Interview Questions</button>
            </Link>
        </div>
    )
}

export default Home
