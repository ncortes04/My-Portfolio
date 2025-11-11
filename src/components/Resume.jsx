import React from "react";
import "../styles/resume.css";
import resume from "../assets/UWResume_2025_v3.pdf";
const Resume = () => {
  return (
    <div className="resume-parent">
      <span className="spacer"></span>
      <iframe
        className="pdf-container"
        src={`${resume}?v=2025-11-11`}
        title="Resume"
      />
    </div>
  );
};

export default Resume;
