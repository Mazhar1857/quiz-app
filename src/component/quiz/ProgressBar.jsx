import React from 'react'
import './ProgressBar.css'
const ProgressBar = ({ curr, total }) => {

    const progressPercent = ((curr / total) * 100);

    return (
        <div className='progress-bar' style={{ '--progress': `${progressPercent}%` }}>

        </div>
    )
}

export default ProgressBar
