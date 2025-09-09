import React from "react";

function Services() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side - Text */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="text-success mb-3">🌟 Our Services</h1>
          <p className="text-muted">
            We provide <strong>professional interior design</strong> & modern solutions 
            that transform your space into something truly unique. ✨
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src="/imagess/services.jpg"
            alt="Moderninterior design Service"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
