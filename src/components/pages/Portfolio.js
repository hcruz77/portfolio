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
      title: "Password Generator",
      image: passwordGen,
      link: "https://hcruz77.github.io/password-generator",
      github: "https://github.com/hcruz77/password-generator",
      technologies: "JavaScript * HTML * CSS",
      description: "Generates random passwords using character combinations of capital and lower case letters, numbers, and special characters."
    },
    {
      id: 2,
      title: "Code Quiz",
      image: codeQuiz,
      link: "https://hcruz77.github.io/code-quiz",
      github: "https://github.com/hcruz77/code-quiz",
      technologies: "HTML * CSS * JavaScript",
      description: "An interactive application created as a timed multiple-choice quiz based on coding terms."
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: weatherDash,
      link: "https://hcruz77.github.io/weather-dashboard",
      github: "https://github.com/hcruz77/weather-dashboard",
      technologies: "OpenWeather API * Bootstrap * Local Storage",
      description: "Provides current weather conditions for a chosen city, along with 5 day forecast."
    },
    {
      id: 4,
      title: "E-Commerce Back End Demo Video",
      image: eComBackend,
      link: "https://drive.google.com/file/d/1ZTCwSKqVX6KjYEaqbFMd1ayhvih7cyzp/view?usp=sharing",
      github: "https://github.com/hcruz77/e-commerce-back-end",
      technologies: "Express.js API * Sequelize * MySQL2 * Insomnia ",
      description: "Reconfigured back-end starter-code to interact with a database to understand the fundamental architecture of e-commerce platforms."
    },
    {
      id: 5,
      title: "Tech Blog",
      image: techBlog,
      link: "https://shrouded-ravine-33313.herokuapp.com",
      github: "https://github.com/hcruz77/tech-blog",
      technologies: "Handlebars.js * MySQL2 * Sequelize * Heroku",
      description: "CMS-style blog for tech enthusiasts to publish articles, blog posts, thoughts and opinions."
    },
    {
      id: 6,
      title: "Bullies To The Rescue",
      image: bullies,
      link: "https://glacial-coast-20674.herokuapp.com",
      github: "https://github.com/hcruz77/bullies-to-the-rescue",
      technologies: "React * MongoDB * Tailwind * Express * Node",
      description: "Group collaboration project using MERN stack single-page application for local non-profit bulldog rescue. Goal was to create a clean, easy to read structure to the application data for administrative retreival. "
    },


  ]);

  return (
    <div style={{
      backgroundImage: `url(${background})`, backgroundSize: 'cover'
    }} >
      <div className=" p-5">
        <h1 className="fw-bold pt-3">Portfolio</h1>
        <div className="container-fluid ">
          <div className="row row-cols-md-3 g-4">
            {projects.map((project) => (
              <div className="py-5" key={project.id}>
                  <div className="card h-100 border border-gray shadow  mb-5 bg-body rounded bg-light bg-opacity-50 text-dark">
                    <img
                      src={project.image}
                      className="card-img-top border border-gray shadow gray-clr"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title"><a href={project.link} target="_blank" rel="noreferrer">{project.title}</a></h5>
                      <p className="card-text"><a href={project.github} target="_blank" rel="noreferrer">Github Repository</a></p>
                      <p className="card-text">{project.description}</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted fst-italic">{project.technologies}</small>
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
