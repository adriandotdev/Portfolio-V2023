import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import '../../css/main.css';

function HeroSection() {

  const { isNightMode } = useContext(ThemeContext);
  
  return (
     
     <div className={`hero-page container ${isNightMode && 'hero-page--body__darkmode'}`}>
        <div className="hero-content row justify-content-center">
          <div className="col align-self-center">
            <h1 id='hero--heading' className={`display-1 text-center text-xl-start ${isNightMode ? 'text-darkModeAccentColor' : 'text-dark'}`}>
              I'm Adrian Nads</h1>
            <p id="hero-page__subheading" className={`h2 text-center text-xl-start font-montserrat ${isNightMode ? "text-contrastColor" : "text-darkSecondary"}`}>
              A solution-oriented <span className={`${isNightMode ? "hero-subheading--span__nightmode" : "hero-subheading--span__daymode"}`}>Web Developer</span> from the Philippines
            </p>
            <div className="d-flex justify-content-center d-xl-block mt-4">
              <button id="btn--resume" className={`btn btn-lg ${isNightMode ? "btn-darkModeAccentColor btn--resume__darkmode" : "btn-darkSecondary btn--resume__daymode"}`}>Download Resume</button>
            </div>
          </div>
          <div
            className="col align-self-center d-none d-xl-block col-md-5 col-lg-4"
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