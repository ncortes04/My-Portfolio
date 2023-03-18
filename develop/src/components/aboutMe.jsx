import '../styles/aboutme.css'
import  myself from '../assets/myself.jpg'
function AboutMe() {
    return(
        <div className="aboutme-container">
             <div className='about-body-left'>
                    <img src={myself}></img>
                </div>
                <div className='about-body-right'>
                    <h3 className='aboutme-title'>About Me</h3>
                    <p className='aboutme-description'>dasdsadadad</p>
                </div>
        </div>
    )
}

export default AboutMe