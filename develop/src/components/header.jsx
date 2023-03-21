import '../styles/header.css'
import image from '../assets/Lovepik_com-401373103-programmer-knocking-code-work-icon-free-vector-illustration-mate.webp'
import { useState, useEffect } from 'react';
function Header(){
    const [leftDivX, setLeftDivX] = useState(-100);
    const [rightDivX, setRightDivX] = useState(100);
      
    useEffect(() => {
        setLeftDivX(0);
        setRightDivX(0);
    }, []);
    
    return(
        <header className='header-container'>
            <a id="header" className='link-tag'></a>
           <div className='header-flex-split'>
                <div className='header-flex-left' style={{ transform: `translateX(${leftDivX}%)`, transition: 'all 2s' }}>
                    <div className='header-title-div'>
                        <h2>Hello, I'm Nicholas. A Full Stack Web Developer.</h2>
                        <p className='header-description'>I am a motivated full stack developer with a genuine love for coding.
                         I enjoy working in a fast paced enviroment to challenge myself and expand my knowledge.</p>
                    </div>
                </div>
                <div className='header-flex-right' style={{ transform: `translateX(${rightDivX}%)`, transition: 'all 2s' }}>
                   <img className='coding-png' src={image} alt='coding person sitting at the table just coding'/>
                </div>
           </div>
           <div className="tilted-text-container">
            <h1 className="tilted-text">HTML CSS<br />JAVASCRIPT<br />REACT<br/>MONGODB <br/>NODE.JS<br/>MYSQL</h1>
    </div>
        </header>
    )
}

export default Header