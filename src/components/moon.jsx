import React from "react";
import "../styles/moon.css"; // Import the CSS file for styling

const Moon = () => {
  return (
    <div className="moon-container">
      <div className="moon">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
        <h1 className="portfolio-title">PORTFOLIO</h1>
      </div>
      <div className="rings">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
        <div className="ring ring4"></div>
        <div className="ring ring5"></div>
        <div className="ring ring6"></div>
        <div className="ring ring7"></div>
        <div className="ring ring8"></div>
      </div>
    </div>
  );
};

export default Moon;
