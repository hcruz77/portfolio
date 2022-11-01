import React from "react";

const Resume = () => {
  return (
    <div className="container-fluid p-5 min-vh-100">
      <h1>Resume</h1>
      <div className="my-3">
      <a href="https://drive.google.com/file/d/1pA-YevPnxam4XHRXJh7vzMmT9OOhFNlS/view"target="_blank" rel="noreferrer" className="fs-5" >My Resume
      </a>
    </div>
    <div className="my-5">
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
    </div>
    <div>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>API's</li>
        <li>Node</li>
        <li>MySQL & Sequilize</li>
        <li>Express</li>
        <li>MVC</li>
      </ul>
    </div>
    </div>
    
  );
};

export default Resume;
