import React from 'react'
import '../../css/main.css';

function HeroSection() {
  return (
     <div className="hero-page container-fluid">
        <div className="hero-content row justify-content-center">
          <div className="col align-self-center">
            <h1 id='hero--heading' className="display-3 text-center text-lg-start text-dark">I'm Adrian Nads</h1>
            <p id="hero-page__subheading" className="h1 text-center text-lg-start text-darkSecondary font-montserrat">
              A solution-oriented <span className="hero-subheading--span">Web Developer</span> from the Philippines
            </p>
            <div className="btn-group d-flex justify-content-center d-lg-block mt-4">
              <button id="btn--resume" className="btn btn-lg btn-darkSecondary">Download Resume</button>
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