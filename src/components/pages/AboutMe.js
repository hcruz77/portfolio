import React from "react";
import background from "../../assets/images/butterflyBackground.png"
import profile from "../../assets/images/profilepic.jpg"

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
                <p className="card-text">Full stack web developer focusing on combining creative front-end design and user-friendly applications. This content is a little bit longer kjhkjh klhlkjhljkhkjhl kljhlkjhl kjh klh . This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer kjhkjh klhlkjhljkhkjhl kljhlkjhl kjh klh </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};




export default AboutMe;
