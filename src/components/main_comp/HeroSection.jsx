import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import '../../css/main.css';
import { motion } from 'framer-motion';

function HeroSection() {

  const { isNightMode } = useContext(ThemeContext);
  
  const titleContainer = {

    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const titleAnimation = {

    initial: {
      scale: 0, opacity: 0
    },
    whileInView: {
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.5
      }
    }
    
  }

  const subtitleAnimation = {

    initial: {
      x: "-10vw", 
      opacity: 0
    },
    whileInView: {
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        stiffness: 100,
        duration: 1
      }
    }
  }

  const buttonHover = {
    initial: {
      scale: 0
    },
    whileHover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 700,
        duration: .1,
      }
    },
    whileInView: {
      scale: 1, 
      transition: {
        type: "spring",
        duration: .5,
        stiffness: 300
      }
    }
  }

  const image = {
    initial: {
      x: "100%", opacity: 0
    },
    whileInView: {
      x: 0, 
      opacity: 1, 
      transition: {
        duration: .5,
        type: "spring",
        stiffness: 500
      }
    }
    
  }
  return (
     
     <div className={`hero-page container ${isNightMode && 'hero-page--body__darkmode'}`}>
        <div className="hero-content row justify-content-center">
          <motion.div variants={titleContainer} initial="initial" whileInView="whileInView" className="col align-self-center">
            <motion.h1 variants={titleAnimation}
               
                id='hero--heading' className={`display-1 text-center text-xl-start ${isNightMode ? 'text-darkModeAccentColor' : 'text-dark'}`}>
              I'm Adrian Nads
            </motion.h1>

            <motion.p variants={subtitleAnimation} id="hero-page__subheading" className={`h2 text-center text-xl-start font-montserrat ${isNightMode ? "text-contrastColor" : "text-darkSecondary"}`}>
              A solution-oriented <span className={`${isNightMode ? "hero-subheading--span__nightmode" : "hero-subheading--span__daymode"}`}>Web Developer</span> from the Philippines
            </motion.p>

            <div className="d-flex justify-content-center d-xl-block mt-4">

              <motion.button variants={buttonHover} id="btn--resume" className={`btn btn-lg ${isNightMode ? "btn-darkModeAccentColor btn--resume__darkmode" : "btn-darkSecondary btn--resume__daymode"}`}>
                Download Resume
              </motion.button>
            </div>

          </motion.div>
          <div
            className="col align-self-center d-none d-xl-block col-md-5 col-lg-4"
          >
            <div className="container text-center">

              <motion.div variants={image} initial="initial" whileInView="whileInView"   className={`${isNightMode ? "image-background__darkmode" : "image-background__daymode"}`}>
                
                <img
                  src="/images/hero-section-main-image.png"
                  alt=""
                  className="hero--image img-fluid"
                />
              </motion.div>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSection