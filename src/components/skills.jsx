import React, { useRef, useEffect, useState } from "react";
import javascript from '../assets/icons8-javascript.svg'
import htmlsvg from '../assets/icons8-html-5.svg'
import csssvg from '../assets/icons8-css3.svg'
import nodesvg from '../assets/icons8-node-js.svg'
import githubsvg from '../assets/icons8-git.svg'
import mongosvg from '../assets/icons8-mongodb.svg'
import mysqlsvg from '../assets/icons8-my-sql.svg'
import reactsvg from '../assets/logo192.png'
import bootstrapsvg from '../assets/bootstrap-5-1.svg'
import vscodesvg from '../assets/Visual_Studio_Code_1.35_icon.svg'
import { useInView } from 'react-intersection-observer';


import '../styles/skills.css'
const Skill = ({ logo, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`single-skill-container ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <object data={logo.image} width="120" style={{ filter: 'grayscale(100%)' }} />
      <p className="header-description m-0">{logo.name}</p>
    </div>
  );
};
function Skills() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const logos = [
    { image: javascript, name: 'JavaScript' },
    { image: htmlsvg, name: 'HTML' },
    { image: csssvg, name: 'CSS' },
    { image: nodesvg, name: 'Node' },
    { image: githubsvg, name: 'GitHub' },
    { image: mongosvg, name: 'MongoDB' },
    { image: mysqlsvg, name: 'MySQL' },
    { image: reactsvg, name: 'React' },
    { image: bootstrapsvg, name: 'BootStrap' },
    { image: vscodesvg, name: 'VS Code' }


  ];
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
          <h3 className="header-intro m-0">
            Heres some things im good at
          </h3>
          <h2 className="timeline-header m-0">
              My Skills
          </h2>
          <p className="header-description">
            These are the languages I have picked up and learned throughout my journey. I have created over 28 projects, ranging from small weather apps to medium-sized full-stack applications.
          </p>
        </div>
        <div className={`skills-animate ${hasAnimated ? 'visible' : ''}`} ref={containerRef}>
        <div className="skills-flex-container">
      <div className="skills-container">
        <div className="skills-flex">
          {logos.slice(0, 4).map((logo, index) => (
            <Skill key={logo.name} logo={logo} index={index} />
          ))}
        </div>
        <div className="skills-flex">
          {logos.slice(4).map((logo, index) => (
            <Skill key={logo.name} logo={logo} index={index} />
          ))}
        </div>
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