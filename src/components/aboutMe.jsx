import React, { useRef, useEffect, useState } from "react";
import myself from "../assets/myself.webp";
import arrow from "../assets/right-arrow-svgrepo-com.svg";
import "../styles/aboutme.css";
import { HashLink as Link } from "react-router-hash-link";
import LazyLoad from "react-lazyload";

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
      { threshold: 0.05 }
    );

    observer.observe(leftRef.current);
    observer.observe(rightRef.current);
  }, []);

  return (
    <div className="aboutme-container">
      <a id="aboutme" className="link-tag"></a>
      <div className="aboutme-title-div">
        <h3 className="header-intro m-0">A Bit About Me</h3>
        <h2 className="timeline-header m-0">About Me</h2>
      </div>
      <div className="aboutme-body">
        <div
          className={`about-body-left${isVisible ? " animate" : ""}`}
          ref={leftRef}
        >
          <p className="description-intro light">Get to Know Me!</p>
          <p className="aboutme-description">
            I am a web developer from Tacoma, Washington, with a passion for
            creating efficient, scalable web applications. I have completed a
            full-stack coding boot camp at the University of Washington, where I
            gained practical experience with modern web technologies in a
            fast-paced, immersive environment.
          </p>
          <p className="aboutme-description">
            My skills are centered around the MERN stack, which I find ideal for
            developing lightweight and dynamic applications. I also work with
            the SERN stack and am comfortable adapting to different frameworks
            based on the project requirements. I continually refine my abilities
            by building projects, studying algorithms, and keeping up with new
            trends in web development.
          </p>
          <p className="aboutme-description">
            I am enthusiastic about opportunities that challenge me and help me
            grow professionally. If you have a position that aligns with my
            skills, please don't hesitate to reach out.
          </p>
          <div className="contact-btn">
            <Link to="/#contact">Contact Me </Link>
            <img src={arrow} alt="Arrow" className="arrow-icon" />
          </div>
        </div>
        <div
          className={`about-body-right${isVisible ? " animate" : ""}`}
          ref={rightRef}
        >
          <div className="about-right-top">
            <div className="image-container">
              <LazyLoad>
                <img src={myself} alt="Picture of Myself" />
              </LazyLoad>
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
      <div></div>
    </div>
  );
}

export default AboutMe;
