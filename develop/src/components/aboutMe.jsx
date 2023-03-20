import '../styles/aboutme.css'
import  myself from '../assets/myself.jpg'
function AboutMe() {
    return(
        <div className="aboutme-container">
             <div className='aboutme-title-div'>
                    <h3 className='aboutme-title'>About Me</h3>
                    <p className='abouttitle-description'>Here you will find insight on who I am, as well as other skills I have other skills I have.
                    I have a solid understanding of these technologies and how to use them; however, i would still categorize myself as basic understanding</p>
             </div>
             <div className='aboutme-body'>
                <div className='about-body-left'>
                        <p className='description-intro'>Get To Know Me!</p>
                        <p className='aboutme-description'> 
                            I am a beginner web develper from Tacoma Washington.
                            I have recently completed the full stack coding bootcamp from Univeristy of Washington.
                            The coding bootcamp was a fast pased information packed course that provided relevant material for modern web development. 
                            I spend my day reading material on web development and practicing what i read. I have created multiple projects
                            outside of my course material to practice and solidify my understanding of coding.
                            I also spend a portion of my day studying algoritms and data structures. 
                        </p>
                        <p className='aboutme-description'> 
                            I have experimented with a few web development languages; However, my favorite combination is the Mern stack.
                            I enjoy working with the mern stack due to it being incredibly good for User Interface and
                            sticking to javascript for my api requests.
                        </p> 
                        <p className='aboutme-description'> 
                            I am looking to secure any coding position that will help me grow,
                            and teach me all there is to know about creating a scalable web application.
                            If you have an opportunity that matches any of my skills please feel free to contact me.
                        </p>
                        <a className='contact-btn'> CONTACT </a>
                    </div>
                    <div className='about-body-right'>
                        <div className='about-right-top'>
                            <div className='image-container'>
                                <img src={myself} alt='picture of myself'></img>
                            </div>
                        </div>
                        <div className='about-right-bottom'>
                        <h3 className='skills-header'> Additional Skills</h3>
                            <div className='skills-flex'>
                                <div className='skill-card'>EXPRESS</div>
                                <div className='skill-card'>REDUX</div>
                                <div className='skill-card'>MONGOOSE</div>
                                <div className='skill-card'>SEQUELIZE</div>
                                <div className='skill-card'>RESPONSIVE DESIGN</div>
                                <div className='skill-card'>TERMINAL</div>
                                <div className='skill-card'>JEST</div>
                                <div className='skill-card'>GRAPHQL</div>
                                <div className='skill-card'>PWAS</div>
                                <div className='skill-card'>REST API'S</div>
                        </div>
                    </div>
             </div>
        </div>
    </div>
    )
}

export default AboutMe