import '../styles/navbar.css'
import { useScroll } from '../provider/contextProvider'

function NavBar(){
    const scroll = useScroll()
    return(
        <nav className={scroll < 100 ? "navbar-container": "navbar-container active"}>
             <h1 className='nav-header'>CREATIVE DESIGN</h1>
             <div className='middle-nav-div'>
                <a href='#aboutme'>ABOUT ME</a>
                <a href='#projects'>PROJECTS</a>
                <a href='#skills'>SKILLS</a>
                <a href='#contact'>CONTACT ME</a>
                <a>RESUME</a>
            </div>
            <div className='nav-link-div'>
                <a 
                href="https://github.com/ncortes04"
                target='_blank'
                className='githubBtn'></a>
                <a
                href='https://www.linkedin.com/in/nicholas-cortes-9912b2269/' 
                target='_blank'
                className='linkedinBtn'></a>
                <a 
                href='https://stackoverflow.com/users/21443127/ncortes' 
                target='_blank' className='stackoverflowBtn'>
                </a>
            </div>
        </nav>
    )
}

export default NavBar