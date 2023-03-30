import React, {useRef, useEffect, useState} from "react";
import javascript from '../assets/icons8-javascript.svg'
import htmlsvg from '../assets/icons8-html-5.svg'
import csssvg from '../assets/icons8-css3.svg'
import nodesvg from '../assets/icons8-node-js.svg'
import githubsvg from '../assets/icons8-git.svg'
import mongosvg from '../assets/icons8-mongodb.svg'
import mysqlsvg from '../assets/icons8-my-sql.svg'
import reactsvg from '../assets/logo192.png'

import '../styles/skills.css'
function Skills() {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
  
    useEffect(() => {
      if (containerRef.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setIsVisible(true);
              observer.unobserve(containerRef.current);
            }
          },
          { threshold: .2 }
        );
  
        observer.observe(containerRef.current);
      }
    }, []);
  
  
    useEffect(() => {
      const container = containerRef.current;
  
      if (isVisible && !hasAnimated) {
        // Set initial position to left of screen
        container.style.transform = 'translateX(-100%)';
        // Set opacity to 0
        container.style.opacity = '0';
  
        // Animate container to center of screen and opacity to 1
        container.animate(
          [
            { transform: 'translateX(-100%)', opacity: '0' },
            { transform: 'translateX(0)', opacity: '1' }
          ],
          { duration: 1500, easing: 'ease-out' }
        ).onfinish = () => {
          // Set final position to center of screen
          container.style.transform = 'translateX(0)';
          container.style.opacity = '1';
        };
  
        setHasAnimated(true);
      } else if (!isVisible && hasAnimated) {
        // Set position back to left of screen
        container.style.transform = 'translateX(-100%)';
        // Set opacity back to 0
        container.style.opacity = '0';
  
        setHasAnimated(false);
      }
    }, [isVisible, hasAnimated]);
  
  
    return(
        <div className="skills-container">
          <a id="skills" className="link-tag"></a>
            <h2 className="skills-title"> My Skills</h2>
            <div className="skills-flex-container" ref={containerRef}>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={javascript} width='70'/>
                    </div>
                    <p className="card-header">Vanilla Javascript</p>
                    <p className="card-description">Javascript is my primary coding language. I have worked with Javascript for over a year now and have a solid understanding of its key concepts. I have coded over 20 projects using Javascript and enjoy every aspect of it.</p>
                </div>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={htmlsvg} width='70'/>
                        <object data={csssvg} width='70'/>
                    </div>
                    <p className="card-header">HTML & CSS</p>
                    <p className="card-description"> I have been working with HTML and CSS for over a year. I have a solid understanding on how CSS and HTML work hand and hand to create the front end. </p>
                </div>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={reactsvg} width='70'/>
                    </div>
                    <p className="card-header">React</p>
                    <p className="card-description"> I have been working with React for about 5 months. React is my favrite framework due to it being Javascript friendly, fast, and easy to understand. I have a solid understanding of the fundamental react features.</p>
                </div>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={nodesvg} width='70'/>
                    </div>
                    <p className="card-header">Node.Js</p>
                    <p className="card-description">I have used node.js for my entire coding journey. I have used node to create all my Javascript projects. I have a solid understanding of how node works and how it communicates with code.</p>
                </div>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={githubsvg} width='70'/>
                    </div>
                    <p className="card-header">Gtihub</p>
                    <p className="card-description">I have been using Github Since i started coding. Github has been my primary wayof sharing code with my fellow peers. I was taught how to use GitHub with fellow peers effectively and how not to. I have used github to share multiple projects with my peers and generate an application.</p>
                </div>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={mongosvg} width='70'/>
                        <object data={mysqlsvg} width='70'/>
                    </div>
                    <p className="card-header">Mongo, MySql</p>
                    <p className="card-description">I have been working wih monogo for 6 months and MySql for 8 months. I have a much better understand of MongoDb and tend to side with it more. I choose MongoDb more often due to it non relational aspects an how small my projectts are.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills