import '../styles/header.css'
import image from '../assets/Lovepik_com-401373103-programmer-knocking-code-work-icon-free-vector-illustration-mate.webp'
import { useState, useEffect } from 'react';
import arrow from '../assets/right-arrow-svgrepo-com.svg'
import Three from './Desktop'
import Desktop from '../assets/gaming_desktop_pc.glb'
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
                        <p className='header-intro m-0'>Hello, my name is,</p>
                        <h2 className='m-0  nowrap'><span className='light'>Nicholas Cortes.</span><br></br>A Full Stack<br></br> Web Developer.</h2>
                        <p className='header-description m-0'>I am a motivated full stack developer with a genuine love for coding.
                         I enjoy working in a fast paced enviroment to challenge myself and expand my knowledge.</p>
                         <div className='view-work-btn'>
                            <p className='btn-text'>View My Work</p>
                            <img src={arrow} alt='Arrow' className='arrow-icon' />
                        </div>
                    </div>
                </div>
                <div className='desktop-3d'>
                    <Three model={Desktop} fval={30} cameraPosition={[22, 4, 2]}/>
                </div>
        </div>
        </header>
    )
}

export default Header