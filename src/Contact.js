import React from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">📞 Contact Us</h1>

      <div className="row align-items-center">
        {/* Left side text */}
        <div className="col-md-6">
          <div className="card shadow p-4">
            <p className="mb-3">
              <strong>Email:</strong> yourmail@example.com
            </p>
            <p>
              <strong>Phone:</strong> +91 9876543210
            </p>
            <button className="btn btn-success mt-3">Send Message</button>
          </div>
        </div>

        {/* Right side image */}
        <div className="col-md-6 text-center">
          <img
            className="img-fluid rounded shadow"
            src="./imagess/contact.jpg"
            alt="Contact"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

