import React, { useEffect, useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import UWlogo from "../assets/UW-logo.svg";
import "../styles/timeline.css";
import leetcodesvg from "../assets/Leetcode.svg";
import linkedinsvg from "../assets/linkedin-color.svg";
import asusvg from "../assets/asulogo.svg";

function MyTimeline({ experience }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{
        boxShadow: "inset 0 1px 0 0 rgba(148,163,184,0.1)",
        backgroundColor: "rgba(148,163,184,0.1)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: "white" }}
      icon={
        <div className="timeline-icon">
          <img src={experience.icon} alt={experience.company} />
        </div>
      }
    >
      <div className="event-card">
        <h3 className="event-title">{experience.title}</h3>
        <p className="event-secondary" style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>

      <ul className="experience-ul">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

const TimeLine = () => {
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(timelineRef.current);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(timelineRef.current);
  }, []);

  const events = [
    {
      title: "Web Development Bootcamp",
      company: "UW Trilogy",
      date: "Aug 2022 - Jan 2023",
      icon: UWlogo,
      points: [
        "I started the bootcamp and learned the fundamentals of web development, gradually expanding my knowledge.",
        "I learned the best modern practices and gained experience using a variety of different applications and tools.",
        "This bootcamp equipped me to create applications using many different libraries, tools, and databases.",
      ],
    },
    {
      title: "Practice",
      company: "LeetCode",
      date: "Jan 2023 - May 2023",
      icon: leetcodesvg,
      points: [
        'I began reading books such as "Cracking the Coding Interview" and developed a strong interest in computer science. I spent countless hours studying and practicing algorithms.',

        "I have currently solved over 300 LeetCode questions and gained an understanding of the importance of space complexity optimization as well as time complexity optimization.",

        "Once I believed I had acquired the necessary computer science knowledge, I started creating projects to demonstrate my skills.",
      ],
    },
    {
      title: "Job Hunt",
      date: "Jul 2023 - Aug 2024",
      company: "Job Hunt",
      icon: linkedinsvg,
      points: [
        "I believe I was equipped with adequate knowledge of creating fast and responsive web applications.",
        "I was looking for jobs where I could grow as a coder and use my skills to create applications.",
        "Attended multiple coding interviews whcih strengthend my interviewing skills",
      ],
    },
    {
      title: "Computer Science Major at ASU",
      date: "Aug 2024 - Present",
      company: "Arizona State University",
      icon: asusvg,
      points: [
        "Currently pursuing a major in Computer Science(Software Engineering) at Arizona State University.",
        "Building a strong foundation in algorithms, data structures, software development, and more.",
        "Actively participating in coding projects and learning about advanced computer science concepts.",
      ],
    },
  ];
  return (
    <div className="timeline-parent">
      <div className="timeline-container">
        <div
          className={`timeline-header-container ${isVisible ? "slide-in" : ""}`}
          ref={timelineRef}
        >
          <p className="header-intro m-0">HERES WHAT I HAVE BEEN UP TO</p>
          <h2 className="timeline-header">My Timeline.</h2>
        </div>
        <div className="vertical-timeline-container">
          <VerticalTimeline>
            {events.map((experience, index) => (
              <MyTimeline key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div className="right-events"></div>
    </div>
  );
};

export default TimeLine;
