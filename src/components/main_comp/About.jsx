import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import '../../css/main.css';
import { ThemeContext } from '../../App';

function About() {

  const { isNightMode } = useContext(ThemeContext);

  return (
    <div id="scrollspyAboutMe" className="about container mt-5 pt-5" data-bs-spy="scroll" data-bs-target="portfolio-navbar" data-bs-offset="0">
        <div className='section__title'>
          <h1  className={`display-5 text-center m-0 fw-bold ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>About</h1>
          <p className={`section--heading__divider mt-0 text-center ${isNightMode ? "text-contrastColor divider__darkmode" : "text-dark divider__daymode"}`}>N</p>
          <hr />
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-center align-self-start">
              <img
                src="/images/About Photo with Style.png"
                alt=""
                className="img-fluid d-none"
              />
              <img
                src="/images/About Photo with Style.png"
                alt=""
                className="img-fluid"
              />
            </div>
            
            <div className="col-12 col-lg-6">
              <h1 className={`text-center text-lg-start mt-3 mt-lg-0 font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>
                Hello! I'm Adrian Nads
              </h1>

              <p id='about--paragraph' className={`text-center text-lg-start ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                I am Adrian Nads L. Marcelo taking a Bachelor of Science in Computer Science, and currently in my senior year at Pamantasan Ng Cabuyao (University of Cabuyao). A passionate, motivated, and solution-oriented Web Developer who loves creating personal projects, connecting to like-minded developers, and constantly learning new skills. I started learning programming in 2019 during my first year in college. I am actively volunteering to code or program some of our school projects to learn and enhance my skills. I also realized that I love creating user interfaces when doing projects in Java Swing, and that made me start to self-learn Web Development through the help of Youtube and other free programming resources. We all know that there's so much to learn in the tech industry, but I am eager and willing to learn new concepts and knowledge, and hoping to collaborate with other developers. I am also open to new opportunities that will come along the way.
              </p>

              <ListGroup>
                <ListGroup.Item className={`${isNightMode ? 'bg-dark border' : 'bg-dark'}`}>
                  <h3 className={`fst-italic text-center text-lg-start fs-3 ${isNightMode ? 'text-darkModeAccentColor' : 'text-contrastColor'}`}>Relevant Experiences/Activities</h3>
                </ListGroup.Item>
                <ListGroup.Item className={`${isNightMode && 'bg-dark border'}`}>
                  <h3 className={`fs-4 p-0 m-0 text-center text-lg-start ${isNightMode && 'text-contrastColor'}`}>Exploring Computer Science Program Webinar</h3>
                  <p className="fs-6 fst-italic text-muted text-center text-lg-start">by Association of Computer Science Students on September 03, 2022</p>
                </ListGroup.Item>

                <ListGroup.Item className={`${isNightMode && 'bg-dark border'}`}>
                  <h3 className={`fs-4 p-0 m-0 text-center text-lg-start ${isNightMode && 'text-contrastColor'}`}>How to start in Web Development from scratch</h3>
                  <p className="fs-6 fst-italic text-muted text-center text-lg-start">by Refocus on September 28, 2022</p>
                </ListGroup.Item>

                <ListGroup.Item className={`${isNightMode && 'bg-dark border'}`}>
                  <h3 className={`fs-4 p-0 m-0 text-center text-lg-start ${isNightMode && 'text-contrastColor'}`}>Zuitt Free Coding Bootcamp</h3>
                  <p className="fs-6 fst-italic text-muted text-center text-lg-start">by Zuitt Coding Bootcamp on January 14, 2023</p>
                </ListGroup.Item>

                <ListGroup.Item className={`${isNightMode && 'bg-dark border'}`}>
                  <p className={`fs-4 p-0 m-0 text-center text-lg-start ${isNightMode && 'text-contrastColor'}`}>Finalist in Programming Competition</p>
                  <p className="fs-6 fst-italic text-muted text-center text-lg-start">by Association of Computer Science Students</p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About