import "../styles/header.css";
import image from "../assets/Lovepik_com-401373103-programmer-knocking-code-work-icon-free-vector-illustration-mate.webp";
import { useState, useEffect } from "react";
import arrow from "../assets/right-arrow-svgrepo-com.svg";
import Moon from "./moon";
function Header() {
  const [leftDivX, setLeftDivX] = useState(-100);
  const [rightDivX, setRightDivX] = useState(100);

  useEffect(() => {
    setLeftDivX(0);
    setRightDivX(0);
  }, []);

  return (
    <header className="header-container">
      <a id="header" className="link-tag"></a>
      <div className="header-flex-split">
        <div
          className="header-flex-left"
          style={{
            transform: `translateX(${leftDivX}%)`,
            transition: "all 2s",
          }}
        >
          <div className="header-title-div">
            <p className="header-intro m-0">Hello, my name is,</p>
            <div className="header-intro-title-div m-0  nowrap">
              <h2 className="light">Nicholas Cortes.</h2>
              <h2>A Full-Stack</h2>
              <h2>Web Developer.</h2>
            </div>
            <p className="header-description m-0">
              I am a motivated full-stack developer with a genuine love for
              coding. I enjoy working in a fast-paced envirnoment to challenge
              myself and expand my knowledge.
            </p>
            <a
              className="view-work-btn"
              href="https://github.com/ncortes04"
              target="blank"
            >
              <p className="btn-text">View My Work</p>
              <img src={arrow} alt="Arrow" className="arrow-icon" />
            </a>
          </div>
        </div>
        <Moon />
      </div>
    </header>
  );
}

export default Header;
