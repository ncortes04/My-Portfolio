import React, {useRef, useEffect, useState} from "react";
import javascript from '../assets/icons8-javascript.svg'
import htmlsvg from '../assets/icons8-html-5.svg'
import csssvg from '../assets/icons8-css3.svg'
import nodesvg from '../assets/icons8-node-js.svg'
import githubsvg from '../assets/icons8-git.svg'
import mongosvg from '../assets/icons8-mongodb.svg'
import mysqlsvg from '../assets/icons8-my-sql.svg'
import reactsvg from '../assets/logo192.png'
import { useScroll } from '../provider/contextProvider'

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
          { threshold: 0.5 }
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
          { duration: 2300, easing: 'ease-out' }
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
            <h2 className="skills-title"> My Skills</h2>
            <div className="skills-flex-container" ref={containerRef}>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={javascript} width='70'/>
                    </div>
                    <p className="card-header">Vanilla Javascript</p>
                    <p className="card-description"> Lorem ipsum dolor sit amet consect incidunt aperiam ratione neque ea non laudantium corrupti consectetur accusantium reprehenderit provident eaque itaque? Similique, officia commodi.</p>
                </div>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={htmlsvg} width='70'/>
                        <object data={csssvg} width='70'/>
                    </div>
                    <p className="card-header">HTML & CSS</p>
                    <p className="card-description"> Lorem ipsum dolor sit amet consect incidunt aperiam ratione neque ea non laudantium corrupti consectetur accusantium reprehenderit provident eaque itaque? Similique, officia commodi.</p>
                </div>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={reactsvg} width='70'/>
                    </div>
                    <p className="card-header">React</p>
                    <p className="card-description"> Lorem ipsum dolor sit amet consect incidunt aperiam ratione neque ea non laudantium corrupti consectetur accusantium reprehenderit provident eaque itaque? Similique, officia commodi.</p>
                </div>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={nodesvg} width='70'/>
                    </div>
                    <p className="card-header">Node.Js</p>
                    <p className="card-description"> Lorem ipsum dolor sit amet consect incidunt aperiam ratione neque ea non laudantium corrupti consectetur accusantium reprehenderit provident eaque itaque? Similique, officia commodi.</p>
                </div>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={githubsvg} width='70'/>
                    </div>
                    <p className="card-header">Gtihub</p>
                    <p className="card-description"> Lorem ipsum dolor sit amet consect incidunt aperiam ratione neque ea non laudantium corrupti consectetur accusantium reprehenderit provident eaque itaque? Similique, officia commodi.</p>
                </div>
                <div className="card-container">
                    <div className="logo-container">
                        <object data={mongosvg} width='70'/>
                        <object data={mysqlsvg} width='70'/>
                    </div>
                    <p className="card-header">Mongo, MySql</p>
                    <p className="card-description"> Lorem ipsum dolor sit amet consect incidunt aperiam ratione neque ea non laudantium corrupti consectetur accusantium reprehenderit provident eaque itaque? Similique, officia commodi.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills