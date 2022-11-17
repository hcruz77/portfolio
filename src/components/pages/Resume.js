import React from "react";
import background from "../../assets/images/butterflyBackground.png"

const Resume = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className=" p-5 min-vh-100">
        <h1 className="fw-bold pt-3">Resume</h1>
        <div className="my-3">
          <a href="https://docs.google.com/document/d/1aqT_Qi2CSt8X4NztT6xvAsnbbAVQMYYlTBbvhZc3gJI/edit?usp=sharing" target="_blank" rel="noreferrer" className="fs-4 text-decoration-underline">Full Resume
          </a>
        </div>
        <div className="my-3">
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
    </div>

  );
};

export default Resume;
