import React from "react";

function Home() {
  return (
    <div className="page container-fluid p-0">
      <div className="hero position-relative text-center">
        <img 
          src="/imagess/banner.webp" 
          alt="banner" 
          className="img-fluid w-100" 
          style={{ maxHeight: "90vh", objectFit: "cover" }} 
        />
        <div className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1 className="display-4 fw-bold">Classic & Modern Interior</h1>
          <p className="lead">We create beautiful spaces that truly feel like home.</p>
          <button className="btn btn-light btn-lg mt-3">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

