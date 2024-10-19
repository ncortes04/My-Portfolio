import React from 'react'
import '../styles/resume.css'
import resume from '../assets/Resume.pdf'
const Resume = () => {
  return (
    <div className='resume-parent'>
        <span className='spacer'></span>
        <iframe className='pdf-container' src={resume}/>
    </div>
  )
}

export default Resume