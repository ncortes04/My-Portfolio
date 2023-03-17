import '../styles/navbar.css'
import { useScroll } from '../provider/contextProvider'

function NavBar(){
    const scroll = useScroll()
    console.log(scroll)
    return(
        <nav className={scroll < 100 ? "navbar-container": "navbar-container active"}>
             <h1 className='nav-header'>CREATIVE DESIGN</h1>
             <div className='middle-nav-div'>
                <a>ABOUT ME</a>
                <a>PROJECTS</a>
                <a>SKILLS</a>
                <a>CONTACT ME</a>
                <a>RESUME</a>
            </div>
            <div className='nav-link-div'>
                 <a className='githubBtn'></a>
                 <a href='' className='linkedinBtn'></a>
                 <a href='' className='stackoverflowBtn'></a>
            </div>
        </nav>
    )
}

export default NavBar