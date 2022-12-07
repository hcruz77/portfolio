import React, { useState } from "react";
import bullies from "../../assets/images/bullies.png";
import techBlog from "../../assets/images/techBlog.png";
import passwordGen from "../../assets/images/passwordGen.png";
import weatherDash from "../../assets/images/weatherDash.png";
import eComBackend from "../../assets/images/eComBackend.png";
import codeQuiz from "../../assets/images/codeQuiz.png";
import background from "../../assets/images/butterflyBackground.png"

const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Bullies To The Rescue",
      image: bullies,
      link: "https://github.com/hcruz77/bullies-to-the-rescue",
      description: "MERN"
    },

    {
      id: 2,
      title: "Tech Blog",
      image: techBlog,
      link: "https://github.com/hcruz77/tech-blog",
      description: "Full Stack MVC"
    },

    {
      id: 3,
      title: "Password Generator",
      image: passwordGen,
      link: "https://github.com/hcruz77/password-generator",
      description: "JSON Server"
    },

    {
      id: 4,
      title: "Weather Dashboard",
      image: weatherDash,
      link: "https://github.com/hcruz77/weather-dashboard",
      description: "Server-Side APIs"
    },

    {
      id: 5,
      title: "E-Commerce Back End",
      image: eComBackend,
      link: "https://github.com/hcruz77/e-commerce-back-end",
      description: "jQuery/Bootstrap"
    },

    {
      id: 6,
      title: "Code Quiz",
      image: codeQuiz,
      link: "https://github.com/hcruz77/code-quiz",
      description: ""
    },
  ]);

  return (
    <div style={{
      backgroundImage: `url(${background})`, backgroundSize: 'cover'
    }} >
      <div className=" p-5">
        <h1 className="fw-bold pt-3">Portfolio</h1>
        <div className="container-fluid p-5 min-vh-100">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {projects.map((project) => (
              <div key={project.id}>

                <div className="card h-100 border border-dark shadow p-3 mb-5 bg-body rounded bg-transparent">
                  <img
                    src={project.image}
                    className="card-img-top gray-clr"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title"><a href={project.link} target="_blank" rel="noreferrer">{project.title}</a></h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
