/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { motion } from 'framer-motion';

// import '../../css/main.min.css';

function HeroSection() {

  const { isNightMode, filters } = useContext(ThemeContext);

  const titleContainer = {

    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    },
    viewport: {
      once: true
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
    },
    viewport: {
      once: true
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
    },
    viewport: {
      once: true
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
        duration: .3,
      }
    },
    whileInView: {
      scale: 1,
      transition: {
        type: "spring",
        duration: .5,
        stiffness: 300
      }
    },
    viewport: {
      once: true
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
    },
    viewport: {
      once: true
    }
  }

  return (

    <div className="hero-section">
      <div id="scrollspyHeroSection" className={`hero-page container ${isNightMode && 'hero-page--body__darkmode'}`}>
        <div className="hero-content row justify-content-center">
          <motion.div variants={titleContainer} initial="initial" whileInView="whileInView" viewport="viewport" className="col align-self-center">
            <motion.h1 variants={titleAnimation} viewport="viewport"

              id='hero--heading' className={`display-1 text-center text-xl-center ${isNightMode ? 'text-darkModeAccentColor' : 'text-dark'}`}>
              I'm Adrian Nads
            </motion.h1>

            <motion.p variants={subtitleAnimation} viewport="viewport" id="hero-page__subheading" className={`mx-auto h2 text-center text-xl-center font-montserrat ${isNightMode ? "text-contrastColor" : "text-darkSecondary"}`}>
              A solution-oriented <span className={`${isNightMode ? "hero-subheading--span__nightmode" : "hero-subheading--span__daymode"}`}>Web Developer</span> from the Philippines
            </motion.p>

            <div className="d-flex justify-content-center  mt-4">

              <motion.a
                variants={buttonHover}
                whileInView="whileInView"
                whileHover="whileHover"
                viewport="viewport"
                target="blank"
                className={`btn btn-lg ${isNightMode ? "btn-darkModeAccentColor btn--resume__darkmode" : "btn-darkSecondary btn--resume__daymode"}`} href="https://drive.google.com/file/d/1vZ1btpAr7q_9ynZToXgYDLe4BSPrBa8E/view?usp=sharing" role="button"
              >
                View My Resume
              </motion.a>
            </div>

          </motion.div>
          <div
            className="col align-self-center d-none  col-md-5 col-lg-4"
          >
            <div className="container text-center">

              <motion.div variants={image} initial="initial" whileInView="whileInView" viewport="viewport" className={`${isNightMode ? "image-background__darkmode" : "image-background__daymode"}`}>

                <img
                  src="/images/Marcelo_Hero_Photo.JPG"
                  alt=""
                  className="hero--image img-fluid"
                />
              </motion.div>
            </div>
          </div>
        </div>

      </div >

      {isNightMode && <motion.div variants={filters} viewport="viewport">
        <div className='hero-bg' role='img' loading='lazy'></div>
        {/* <div className='hero-bg2' role='img' loading='lazy'></div> */}
        <div className='hero-bg3' role='img' loading='lazy'></div>
      </motion.div>}

      {!isNightMode && <motion.div variants={filters} viewport="viewport">

        <div className='hero-bg-light' role='img' loading='lazy'></div>

        <div className='hero-bg-light2' role='img' loading='lazy'></div>

        <div className='hero-bg-light3' role='img' loading='lazy'></div>

        <div className='hero-bg-light4' role='img' loading='lazy'></div>
      </motion.div>}
    </div>
  )
}

export default HeroSection