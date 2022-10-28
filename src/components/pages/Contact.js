import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact</h1>
      <form className="col-6">
        <div className="mb-3">
          <label for="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com">
            </input>
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">Message Me</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
