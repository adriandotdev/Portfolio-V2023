import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  return (
     <div className="hero-page container">
        <div className="hero-content row justify-content-center">
          <div className="col align-self-center">
            <h1 className="display-1 text-center text-lg-start">I'm Adrian Nads</h1>
            <p className="display-3 text-muted text-center text-lg-start">
              Web Developer from the Philippines
            </p>
            <div className="btn-group d-flex justify-content-center d-lg-block">
              <button className="btn btn-dark">Resume</button>
              <button className="btn btn-outline-secondary">Contact Me</button>
            </div>
          </div>
          <div
            className="col align-self-center d-none d-lg-block col-md-5 col-lg-4"
          >
            <div className="container text-center">
              <img
                src="/images/Nads CV Photo.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSection