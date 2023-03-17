import '../styles/header.css'
import image from '../assets/Lovepik_com-401373103-programmer-knocking-code-work-icon-free-vector-illustration-mate.png'
function Header(){

    return(
        <header className='header-container'>
           <div className='header-flex-split'>
                <div className='header-flex-left'>
                    <div className='header-title-div'>
                        <h2>Hello, I'm Nicholas. A Full Stack Web Developer.</h2>
                        <p className='header-description'>I am a motivated full stack developer with a genuine love for coding.
                         I enjoy working in a fast paced enviroment to challenge myself and expand my knowledge.</p>
                    </div>
                </div>
                <div className='header-flex-right'>
                   <img className='coding-png' src={image} alt='coding person sitting at the table just coding'/>
                </div>
           </div>
        </header>
    )
}

export default Header