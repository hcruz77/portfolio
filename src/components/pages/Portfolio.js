import React, { useState } from "react";
import greeneryOne from "../../assets/images/greeneryOne.jpg";
import greeneryTwo from "../../assets/images/greeneryTwo.jpg";
import greeneryThree from "../../assets/images/greeneryThree.jpg";
import greeneryFour from "../../assets/images/greeneryFour.jpg";
import greeneryFive from "../../assets/images/greeneryFive.jpg";
import greenerySix from "../../assets/images/greenerySix.jpg";
import background from "../../assets/images/sketchedBackdrop.png"

const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Text Editor",
      image: greeneryOne,
      link: "https://github.com/hcruz77/text-editor",
      description: "PWA"
    },

    {
      id: 2,
      title: "Tech Blog",
      image: greeneryTwo,
      link: "https://github.com/hcruz77/tech-blog",
      description: "Full Stack MVC"
    },

    {
      id: 3,
      title: "Note Taker",
      image: greeneryThree,
      link: "https://github.com/hcruz77/note-taker",
      description: "JSON Server"
    },

    {
      id: 4,
      title: "Weather Dashboard",
      image: greeneryFour,
      link: "https://github.com/hcruz77/weather-dashboard",
      description: "Server-Side APIs"
    },

    {
      id: 5,
      title: "Work Day Scheduler",
      image: greeneryFive,
      link: "https://github.com/hcruz77/work-day-scheduler",
      description: "jQuery/Bootstrap"
    },

    {
      id: 6,
      title: "Password Generator",
      image: greenerySix,
      link: "https://github.com/hcruz77/password-generator",
      description: "JavaScript"
    },
  ]);

  return (
    <div style={{
      backgroundImage: `url(${background})`, backgroundSize: 'cover' }} >
      <div className=" p-5">
        <h1>Portfolio</h1>
        <div className="container-fluid p-5 min-vh-100">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="col">
                  <div className="card border border-dark">
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
