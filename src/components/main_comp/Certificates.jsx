import { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { ThemeContext } from '../../App';
import { motion } from 'framer-motion';

function Certificates() {

  const { isNightMode } = useContext(ThemeContext);

  const containerAnimation = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    },
    viewport: {
      once: true
    }
  }

  const titleAnimation = {

    initial: {
      y: 150, opacity: 0
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        duration: .5,
      }
    },
    viewport: {
      once: true
    }
  }

  const certificatesAnimation = {

    initial: {
      scale: 0
    },
    whileInView: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: .5,
      }
    },
    viewport: {
      once: true
    }
  }
  return (

    <motion.div variants={containerAnimation} initial="initial" whileInView="whileInView" viewport="viewport" id="scrollspyCertificates" className="container my-5 pt-5">
      <motion.div variants={containerAnimation} viewport="viewport">
        <motion.h1 variants={titleAnimation} viewport="viewport" className={`display-5 text-center mt-5 fw-bold ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Certificates</motion.h1>

        <motion.p variants={titleAnimation} viewport="viewport" className={`section--heading__divider mt-0 text-center ${isNightMode ? "text-contrastColor divider__darkmode" : "text-dark divider__daymode"}`}>N</motion.p>
        <hr className={`${isNightMode ? "border-darkModeAccentColor" : ""}`} />
      </motion.div>

      <motion.div variants={certificatesAnimation} viewport="viewport" className="row justify-content-center">
        <Col className="col-12 col-lg-6">
          <div
            id="carouselExampleControls"
            className="carousel slide carousel-dark shadow-sm"
            data-bs-ride="carousel"
          >
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="7" aria-label="Slide 8"></button>
            </div>

            {/* Carousel Inner Content */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/certificates/Certificate_of_Achievement.png"
                  className="d-block w-100"
                  alt="Certificate of Achievement for Outstanding Front-End Developer Intern"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/certificates/Backend_Development_and_APIs.png"
                  className="d-block w-100"
                  alt="Freecodecamp certificate for Back End Development and APIs"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/certificates/Frontend_Development_Libraries.png"
                  className="d-block w-100"
                  alt="Freecodecamp certificate for Javascript Data Structures and Algorithms"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/certificates/JavaScript_Algorithms_and_Data_Structures.png"
                  className="d-block w-100"
                  alt="Freecodecamp certificate for Responsive Web Design"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/certificates/Responsive_Web_Design.png"
                  className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/certificates/Algo Filipino Mobile Dev Workshop.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/certificates/Zuit Coding Free Bootcamp.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/certificates/Scrum 101 - Learn the Basics.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev carousel-dark"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carousel-dark"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Col>
      </motion.div>
    </motion.div>
  )
}

export default Certificates