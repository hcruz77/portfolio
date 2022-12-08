import React from "react";
import background from "../../assets/images/butterflyBackground.png"

const Contact = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
        <div className="container-fluid p-5 min-vh-100">
          <h1 className="fw-bold pt-3">Contact</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="card bg-light bg-opacity-50 text-dark border border-gray shadow">
                <div className="card-body">
                  <p className="card-text">I would love to hear from you! Feel free to connect with me using the links below.</p>
                  <h5 className="card-title">Heather Cruz</h5>
                  <a href="https://www.linkedin.com/in/heather-cruz-492714255/" target="_blank" rel="noreferrer" className="card-link">Linkedin</a>
                  <a href="https://github.com/hcruz77" target="_blank" rel="noreferrer" className="card-link">Github Profile</a>
                  <a href="mailto:chance.heather@gmail.com" className="card-link">email</a>
                </div>
              </div>
            </div>
          </div>














          {/* <form className="col-6">
          <div className="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="name" className="form-control" id="name">
            </input>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" required>
            </input>
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">Message Me</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
