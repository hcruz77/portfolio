import React from "react";
import background from "../../assets/images/sketchedFlowers.png"

const AboutMe = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, 
     backgroundSize: 'cover'}} >
      <div className="container-fluid p-5 min-vh-100">
        <div className="row col-7">
          <h1>About Me</h1>
          <p className='bg-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>

  );
};


//AboutMe.PropTypes = {} 

export default AboutMe;
