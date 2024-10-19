import React, { useEffect, useRef, useState } from "react";

import "../styles/skills.css";
import BallCanvas from "./Ball";
import Loading from "./Loading";

const Skills = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [logos, setLogos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    const loadLogos = async () => {
      try {
        const logosData = await Promise.all([
          import("../assets/javalogo.svg"),
          import("../assets/pythonlogo.svg"),
          import("../assets/icons8-javascript.svg"),
          import("../assets/icons8-html-5.svg"),
          import("../assets/icons8-css3.svg"),
          import("../assets/icons8-node-js.svg"),
          import("../assets/icons8-git.svg"),
          import("../assets/icons8-mongodb.svg"),
          import("../assets/icons8-my-sql.svg"),
          import("../assets/logo192.png"),
          import("../assets/bootstrap-5-1.svg"),
          import("../assets/Three.js_Icon.svg"),
          import("../assets/Nextjs-logo.png"),
          import("../assets/Visual_Studio_Code_1.35_icon.svg"),
        ]);

        const logos = [
          { logo: logosData[0].default, name: "Java" },
          { logo: logosData[1].default, name: "Python" },
          { logo: logosData[2].default, name: "JavaScript" },
          { logo: logosData[3].default, name: "HTML" },
          { logo: logosData[4].default, name: "CSS" },
          { logo: logosData[5].default, name: "Node.js" },
          { logo: logosData[6].default, name: "Git" },
          { logo: logosData[7].default, name: "MongoDB" },
          { logo: logosData[8].default, name: "MySQL" },
          { logo: logosData[9].default, name: "React" },
          { logo: logosData[10].default, name: "Bootstrap" },
          { logo: logosData[11].default, name: "Three.js" },
          { logo: logosData[12].default, name: "Next.js" },
          { logo: logosData[13].default, name: "Visual Studio Code" },
        ];

        setLogos(logos);
        setIsLoading(false);
      } catch (error) {
        console.error("An error occurred while loading the logos:", error);
      }
    };

    loadLogos();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (isVisible && !hasAnimated) {
      container.style.transform = "translateX(-100%)";
      container.style.opacity = "0";

      container.animate(
        [
          { transform: "translateX(-100%)", opacity: "0" },
          { transform: "translateX(0)", opacity: "1" },
        ],
        { duration: 1500, easing: "ease-out" }
      ).onfinish = () => {
        container.style.transform = "translateX(0)";
        container.style.opacity = "1";
      };

      setHasAnimated(true);
    } else if (!isVisible && hasAnimated) {
      container.style.transform = "translateX(-100%)";
      container.style.opacity = "0";

      setHasAnimated(false);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div className="skills-container">
      <a id="skills" className="link-tag"></a>
      <div className="skills-title-container">
        <h3 className="header-intro m-0">Here are some things I'm good at</h3>
        <h2 className="timeline-header m-0">My Skills</h2>
        <p className="header-description">
          These are the languages I have picked up and learned throughout my
          journey. I have created over 28 projects, ranging from small weather
          apps to medium-sized full-stack applications.
        </p>
      </div>
      <div
        className={`skills-animate ${hasAnimated ? "visible" : ""}`}
        ref={containerRef}
      >
        <div className="skills-flex-container">
          <div className="skills-container">
            <div className="skills-flex">
              {logos.map((item, index) => (
                <div className="skill-container" key={index}>
                  <img className="skill-img" src={item.logo}></img>
                  <p className="skill-name">{item.name}</p>
                </div>
              ))}
            </div>
            <div className="skills-flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
