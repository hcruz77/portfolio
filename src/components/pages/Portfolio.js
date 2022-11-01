import React, { useState } from "react";
import greeneryOne from "../../assets/images/greeneryOne";

import greeneryTwo from "../../assets/images/greeneryTwo";


const Portfolio = () => {
  const [projects] = useState([
    {
      title: "Text Editor",
      image: {greeneryOne},
      link: "https://github.com/hcruz77/text-editor",
      description: "PWA"
    },

    {
      title: "Tech Blog",
      image: {greeneryTwo},
      link: "https://github.com/hcruz77/tech-blog",
      description: "Full Stack MVC"
    },

    {
      title: "Note Taker",
      image: "",
      link: "https://github.com/hcruz77/note-taker",
      description: "JSON Server"
    },

    {
      title: "Weather Dashboard",
      image: "",
      link: "https://github.com/hcruz77/weather-dashboard",
      description: "Server-Side APIs"
    },

    {
      title: "Work Day Scheduler",
      image: "",
      link: "https://github.com/hcruz77/work-day-scheduler",
      description: "jQuery/Bootstrap"
    },

    {
      title: "Password Generator",
      image: "",
      link: "https://github.com/hcruz77/password-generator",
      description: "JavaScript"
    },
  ]);

  return (
    <div className=" p-5">
      <h1>Portfolio</h1>
      <div className="container-fluid p-5 min-vh-100">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {projects.map((project) => (
            <div class="col">
              <div class="card">
                <img
                  src={project.image}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title"><a href={project.link}>{project.title}</a></h5>
                  <p class="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
