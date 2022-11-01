import React from "react";
import background from "../../assets/images/sketchedFlowers.png"

const Contact = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className="container-fluid p-5 min-vh-100">
        <h1>Contact</h1>
        <form className="col-6">
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
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;
