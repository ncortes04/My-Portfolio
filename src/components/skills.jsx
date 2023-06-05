import React, { useRef, useEffect, useState } from "react";
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
        { threshold: 0.2 }
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

        animateBars();
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

  const animateBars = () => {
    const bars = containerRef.current.querySelectorAll('.bar');

    bars.forEach((bar) => {
      const percentageValue = bar.querySelector('.percentage-value');
      const width = percentageValue.parentNode.style.width;

      percentageValue.style.width = width;
      bar.classList.add('fillAnimation');
    });
  };
    return(
      <div className="skills-container">
        <a id="skills" className="link-tag"></a>
        <div className="skills-title-container">
          <h2 className="skills-title">
            Heres Some Of My Skills</h2>
        </div>
        <div className={`skills-animate ${hasAnimated ? 'visible' : ''}`} ref={containerRef}>
          <div className="skills-flex-container">
            <div className="card-container">
              <div className="logo-container">
                <object data={javascript} width="70" />
              </div>
              <p className="card-header">Vanilla JavaScript</p>
              <p className="card-description">JavaScript is my primary coding language. I have worked with JavaScript for over a year now and have a solid understanding of its key concepts. I have coded over 20 projects using JavaScript and enjoy every aspect of it.</p>
            </div>
            <div className="card-container">
              <div className="logo-container">
                <object data={htmlsvg} width="70" />
                <object data={csssvg} width="70" />
              </div>
              <p className="card-header">HTML & CSS</p>
              <p className="card-description">I have been working with HTML and CSS for over a year. I have a solid understanding of how CSS and HTML work hand in hand to create the front end.</p>
            </div>
            <div className="card-container">
              <div className="logo-container">
                <object data={reactsvg} width="70" />
              </div>
              <p className="card-header">React</p>
              <p className="card-description">I have been working with React for about 5 months. React is my favorite framework due to its JavaScript friendliness, speed, and ease of understanding. I have a solid understanding of the fundamental React features.</p>
            </div>
            <div className="card-container">
              <div className="logo-container">
                <object data={nodesvg} width="70" />
              </div>
              <p className="card-header">Node.js</p>
              <p className="card-description">I have used Node.js for my entire coding journey. I have used Node to create all my JavaScript projects. I have a solid understanding of how Node works and how it communicates with code.</p>
            </div>
            <div className="card-container">
              <div className="logo-container">
                <object data={githubsvg} width="70" />
              </div>
              <p className="card-header">GitHub</p>
              <p className="card-description">I have been using GitHub since I started coding. GitHub has been my primary way of sharing code with my fellow peers. I was taught how to use GitHub effectively to continuously integrate features as a team. I have used GitHub to share multiple projects with my peers and generate applications.</p>
            </div>
            <div className="card-container">
              <div className="logo-container">
                <object data={mongosvg} width="70" />
                <object data={mysqlsvg} width="70" />
              </div>
              <p className="card-header">MongoDB, MySQL</p>
              <p className="card-description">I have been working with MongoDB for 6 months. I have a slightly better understanding of MongoDB and i use tend to side with it more. I chose MongoDB more often due to its non-relational aspects and how small my projects were.</p>
            </div>
            <div className="card-container">
              <div className="logo-container">
                <object data={mysqlsvg} width="70" />
              </div>
              <p className="card-header">MySQL</p>
              <p className="card-description">I have been working with MySQL for about 9 months now and have built a few projects with it. I have really grown to like MySQL because of how useful some of its features are. A relational database makes more sense to me when it comes to creating a medium sized application. </p>
            </div>
          </div>
          <div className="bargraph-container">
            <div className="bar">
              <div className="label">
                <p>HTML</p>
              </div>
              <div className="percentage" style={{ width: '60%' }}>
                <span className="percentage-value"></span>
                <p className="percentage-text">60%</p>
              </div>
            </div>
            <div className="bar">
              <div className="label">
                <p>CSS</p>
              </div>
              <div className="percentage" style={{ width: '80%' }}>
                <span className="percentage-value"></span>
                <p className="percentage-text">80%</p>
              </div>
            </div>
            <div className="bar">
              <div className="label">
                <p>React</p>
              </div>
              <div className="percentage" style={{ width: '60%' }}>
                <span className="percentage-value"></span>
                <p className="percentage-text">60%</p>
              </div>
            </div>
            <div className="bar">
              <div className="label">
                <p>Node.js</p>
              </div>
              <div className="percentage" style={{ width: '50%' }}>
                <span className="percentage-value"></span>
                <p className="percentage-text">50%</p>
              </div>
            </div>
            <div className="bar">
              <div className="label">
                <p>GitHub</p>
              </div>
              <div className="percentage" style={{ width: '60%' }}>
                <span className="percentage-value"></span>
                <p className="percentage-text">60%</p>
              </div>
            </div>
            <div className="bar">
              <div className="label">
                <p>MongoDB</p>
              </div>
              <div className="percentage" style={{ width: '60%' }}>
                <span className="percentage-value"></span>
                <p className="percentage-text">60%</p>
              </div>
            </div>
            <div className="bar">
              <div className="label">
                <p>MySQL</p>
              </div>
              <div className="percentage" style={{ width: '60%' }}>
                <span className="percentage-value"></span>
                <p className="percentage-text">60%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Skills