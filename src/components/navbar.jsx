import '../styles/navbar.css'
import { useScroll } from '../provider/contextProvider'
import { HashLink as Link} from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

function NavBar(){
    const scroll = useScroll()
    return( 
        <nav className={scroll < 100 ? "navbar-container": "navbar-container active"} style={useLocation().pathname !== '/' ? {position : "static", background : 'black'} : null}>
            <a className='h1-link' href='/My-Portfolio' ><h1 className='nav-header'>CREATIVE DESIGN</h1></a> 
             <div className='middle-nav-div'>
                <Link to='/#aboutme'>ABOUT ME</Link>
                <Link to='/projects' >PROJECTS</Link>
                <Link to='/#skills' >SKILLS</Link>
                <Link to='/#contact'>CONTACT ME</Link>
                <Link to='/resume'>RESUME</Link>
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