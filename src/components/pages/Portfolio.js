import React, { useState } from "react";
import butterflyOne from "../../assets/images/butterflyOne.jpg";
import butterflyTwo from "../../assets/images/butterflyTwo.jpg";
import butterflyThree from "../../assets/images/butterflyThree.jpg";
import butterflyFour from "../../assets/images/butterflyFour.jpg";
import butterflyFive from "../../assets/images/butterflyFive.jpg";
import butterflySeven from "../../assets/images/butterflySeven.jpg";
import background from "../../assets/images/butterflyBackground.png"

const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Text Editor",
      image: butterflyOne,
      link: "https://github.com/hcruz77/text-editor",
      description: "PWA"
    },

    {
      id: 2,
      title: "Tech Blog",
      image: butterflyTwo,
      link: "https://github.com/hcruz77/tech-blog",
      description: "Full Stack MVC"
    },

    {
      id: 3,
      title: "Note Taker",
      image: butterflyThree,
      link: "https://github.com/hcruz77/note-taker",
      description: "JSON Server"
    },

    {
      id: 4,
      title: "Weather Dashboard",
      image: butterflyFour,
      link: "https://github.com/hcruz77/weather-dashboard",
      description: "Server-Side APIs"
    },

    {
      id: 5,
      title: "Work Day Scheduler",
      image: butterflyFive,
      link: "https://github.com/hcruz77/work-day-scheduler",
      description: "jQuery/Bootstrap"
    },

    {
      id: 6,
      title: "Password Generator",
      image: butterflySeven,
      link: "https://github.com/hcruz77/password-generator",
      description: "JavaScript"
    },
  ]);

  return (
    <div style={{
      backgroundImage: `url(${background})`, backgroundSize: 'cover' }} >
      <div className=" p-5">
        <h1 className="fw-bold pt-3">Portfolio</h1>
        <div className="container-fluid p-5 min-vh-100">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="col">
                  <div className="card border border-dark shadow p-3 mb-5 bg-body rounded">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title"><a href={project.link} target="_blank" rel="noreferrer">{project.title}</a></h5>
                      <p className="card-text">{project.description}</p>
                    </div>
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
