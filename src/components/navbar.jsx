import '../styles/navbar.css'
import { useScroll } from '../provider/contextProvider'

function NavBar(){
    const scroll = useScroll()
    if(window.location.pathname !== '/My-Portfolio') {
        var location = '/My-Portfolio'
    }
    return( 
        <nav className={scroll < 100 ? "navbar-container": "navbar-container active"} style={window.location.pathname === '/My-Portfolio/resume' ? {position : "static", background : 'black'} : null}>
            <a className='h1-link' href='/My-Portfolio' ><h1 className='nav-header'>CREATIVE DESIGN</h1></a> 
             <div className='middle-nav-div'>
                <a href={ location ? `${location}#aboutme` : '#aboutme'}>ABOUT ME</a>
                <a href={ location ? `${location}#projects` : '#projects'}>PROJECTS</a>
                <a href={ location ? `${location}#skills` : '#skills'}>SKILLS</a>
                <a href={ location ? `${location}#contact` : '#contact'}>CONTACT ME</a>
                <a href='/resume'>RESUME</a>
            </div>
            <div className='nav-link-div'>
                <a 
                href="https://github.com/ncortes04"
                rel='noreferrer'
                target='_blank'
                className='githubBtn'>Gtihub Button</a>
                <a
                href='https://www.linkedin.com/in/nicholas-cortes-9912b2269/' 
                rel='noreferrer'
                target='_blank'
                className='linkedinBtn'>Linkedin Button</a>
                <a 
                href='https://stackoverflow.com/users/21443127/ncortes' 
                rel='noreferrer'
                target='_blank' className='stackoverflowBtn'>Stack Overflow Button
                </a>
            </div>
        </nav>
    )
}

export default NavBar