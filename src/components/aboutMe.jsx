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
            I’m a software developer and Computer Science major at the
            University of Washington, passionate about designing intelligent,
            scalable applications that solve real-world problems. My journey
            began at the UW Full-Stack Web Development Bootcamp, where I built a
            strong foundation in modern web technologies through hands-on
            projects and teamwork.
          </p>

          <p className="aboutme-description">
            Since then, I’ve expanded my skills through academic study and
            independent projects — combining software engineering principles,
            data structures, and machine learning techniques. My main focus is
            full-stack development using the MERN and SERN stacks, but I also
            enjoy exploring Python for backend and AI-driven applications.
          </p>

          <p className="aboutme-description">
            I love building tools that make life easier — from productivity apps
            to data-driven web platforms — and I’m always eager to learn,
            collaborate, and grow as a developer. If you’re working on something
            innovative or need a reliable developer who’s driven by curiosity
            and impact, I’d love to connect.
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
              <div className="skill-card">AI Integration</div>
              <div className="skill-card">Computer Vision</div>
              <div className="skill-card">Cloud Deployment</div>
              <div className="skill-card">API Design</div>
              <div className="skill-card">CI/CD</div>
              <div className="skill-card">UX Optimization</div>
              <div className="skill-card">Data Modeling</div>
              <div className="skill-card">Automation</div>
              <div className="skill-card">Testing</div>
              <div className="skill-card">Responsive UI</div>
              <div className="skill-card">Agile Workflow</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AboutMe;
