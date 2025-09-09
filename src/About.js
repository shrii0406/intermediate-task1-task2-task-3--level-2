import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left side text */}
        <div className="col-md-6">
          <h1 className="display-5 fw-bold text-primary mb-3">About Us</h1>
          <p className="lead">
            We are building a modern SPA using <b>React Router</b> with a clean design
            and Bootstrap styling ✨.
          </p>
        </div>

        {/* Right side image */}
        <div className="col-md-6 text-center">
          <img
            className="img-fluid rounded shadow"
            src="/imagess/about.jpg"
            alt="About"
          />
        </div>
      </div>
    </div>
  );
}

export default About;


