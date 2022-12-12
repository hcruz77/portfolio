import React from "react";
import background from "../../assets/images/butterflyBackground.png"
import profile from "../../assets/images/profilePic1.JPG"

const AboutMe = () => {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover'
      }} >
      <div className="container-fluid p-5 min-vh-100">
        <h1 className="fw-bold pt-3 ">About Me</h1>

        <div className="card mb-3 p-3 bg-light bg-opacity-50 text-dark border border-gray shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={profile} className="img-fluid rounded border border-gray shadow" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">
                  <ul>
                    <li>Professional people pleaser</li>
                    <li>Nature lover</li>
                    <li>Artist</li>
                    <li>Information junkie</li>
                    <li>Rule breaker</li>
                    <li>Team player</li>
                    <li>Dog mom</li>
                    <li>Problem solver extraordinaire</li>
                  </ul>
                   Not only do I possess these remarkable quailities, I also come packed with a full stack web developer certificate from University
                   of North Carolina.  Front end design and development of clean, visually appealing, user-friendly applications are my BFFs.
                   Let's join forces and make the web a more fun, beautiful place! </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};




export default AboutMe;
