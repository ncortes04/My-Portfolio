import React, { useRef, useEffect, useState } from "react";
import myself from '../assets/myself.webp';
import arrow from "../assets/right-arrow-svgrepo-com.svg";
import '../styles/aboutme.css';
import { HashLink as Link} from 'react-router-hash-link';

function AboutMe() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(leftRef.current);
    observer.observe(rightRef.current);
  }, []);

  return (
    <div className="aboutme-container">
      <a id="aboutme" className="link-tag"></a>
      <div className="aboutme-title-div">
        <h3 className="header-intro m-0">Heres a lttle about myself</h3>
        <h2 className="timeline-header m-0">About Me</h2>
      </div>
      <div className="aboutme-body">
        <div
          className={`about-body-left${isVisible ? ' animate' : ''}`}
          ref={leftRef}
        >
          <p className="description-intro light">Get To Know Me!</p>
          <p className="aboutme-description">
            I am a beginner web developer from Tacoma, Washington. I have recently completed the full-stack coding bootcamp from the University of Washington.
            The coding bootcamp was a fast-paced, information-packed course that provided relevant material for modern web development.
            I spend my days reading material on web development and practicing what I learn. I have created multiple projects outside of my course material to practice and solidify my understanding of coding.
            I also spend a portion of my day studying algorithms and data structures.
          </p>
          <p className="aboutme-description">
            I have experimented with a few web development languages; however, my favorite combination is the MERN stack.
            I enjoy working with the MERN stack due to its lightweight nature. I also enjoy using the SERN stack depending on the application I am making.
          </p>
          <p className="aboutme-description">
            I am looking to secure any coding position that will help me grow and teach me all there is to know about creating scalable web applications.
            If you have an opportunity that matches any of my skills, please feel free to contact me.
          </p>
          <div className="contact-btn">
          <Link to='/#aboutme'>Contact Me </Link>
            <img src={arrow} alt="Arrow" className="arrow-icon" />
          </div>
        </div>
        <div
          className={`about-body-right${isVisible ? ' animate' : ''}`}
          ref={rightRef}
        >
          <div className="about-right-top">
            <div className="image-container">
              <img src={myself} alt="picture of myself" />
            </div>
          </div>
          <div className="about-right-bottom">
            <h3 className="skills-header light">Additional Skills</h3>
            <div className="about-skills-flex">
              <div className="skill-card">EXPRESS</div>
              <div className="skill-card">REDUX</div>
              <div className="skill-card">MONGOOSE</div>
              <div className="skill-card">SEQUELIZE</div>
              <div className="skill-card">RESPONSIVE DESIGN</div>
              <div className="skill-card">TERMINAL</div>
              <div className="skill-card">JEST</div>
              <div className="skill-card">GRAPHQL</div>
              <div className="skill-card">PWAS</div>
              <div className="skill-card">REST API'S</div>
              <div className="skill-card">BOOTSTRAP</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default AboutMe;
