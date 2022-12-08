import React from "react";
import background from "../../assets/images/butterflyBackground.png"

const Resume = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className=" p-5 min-vh-100">
        <h1 className="fw-bold pt-3">Technical Skills</h1>
        <div className="my-3">
          {/* <a href="https://docs.google.com/document/d/1aqT_Qi2CSt8X4NztT6xvAsnbbAVQMYYlTBbvhZc3gJI/edit?usp=sharing" target="_blank" rel="noreferrer" className="fs-4 text-decoration-underline">Full Resume
          </a> */}
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card bg-light bg-opacity-50 text-dark">
              <h5 class="card-header bg-light bg-opacity-50 fw-semibold">Featured Proficiencies</h5>
              <div class="card-body">
                <div className="card-block">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 class="card-title fw-semibold">Front End</h5>
                      {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                      <div className="my-3">
                        <div>
                          <ul>
                            <li>HTML & CSS</li>
                            <li>JavaScript</li>
                            <li>Responsive Design</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5 class="card-title fw-semibold">Back End</h5>
                      <ul>
                        <li>API's</li>
                        <li>Node</li>
                        <li>MySQL & Sequilize</li>
                        <li>Express</li>
                        <li>MVC</li>
                      </ul>
                    </div>
                    <div>
                      <a href="https://docs.google.com/document/d/1aqT_Qi2CSt8X4NztT6xvAsnbbAVQMYYlTBbvhZc3gJI/edit?usp=sharing" target="_blank" rel="noreferrer" class="btn btn-primary">Full Resume</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Resume;
