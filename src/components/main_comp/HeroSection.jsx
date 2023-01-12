import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  return (
     <div class="hero-page container">
        <div class="hero-content row">
          <div class="col align-self-center">
            <h1 class="display-1 text-center text-lg-start">Adrian Nads</h1>
            <p class="display-5 text-muted text-center text-lg-start">
              Web Developer from the Philippines
            </p>
            <div class="btn-group d-flex justify-content-center d-lg-block">
              <button class="btn btn-dark">Resume</button>
              <button class="btn btn-outline-secondary">Contact Me</button>
            </div>
          </div>
          <div
            class="col align-self-center d-none d-lg-block col-md-5 col-lg-4"
          >
            <div class="container text-center">
              <img
                src="./img/Nads CV Photo.jpg"
                alt=""
                class="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSection