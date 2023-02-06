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
         <hr className={`${isNightMode ? "border-darkModeAccentColor" : ""}`}/>
        </div>

        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-xl-6 text-center align-self-start">
              <img
                src="/images/About Photo Square.jpg"
                alt=""
                className="img-fluid d-block d-xl-none"
              />
              <img
                src="/images/About Photo.jpg"
                alt=""
                className="img-fluid d-none d-xl-block"
              />
            </div>
            
            <div className="col-12 col-xl-6">
              <h1 className={`text-center text-xl-start mt-3 mt-xl-0 font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>
                Hello! I'm Adrian Nads
              </h1>

              <p id='about--paragraph' className={`text-center text-xl-start ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                I'm taking a Bachelor of Science in Computer Science and am currently in my senior year at Pamantasan ng Cabuyao (University of Cabuyao). A passionate, motivated, and solution-oriented Web Developer who loves to create personal projects, connect to like-minded individuals, and constantly learn new skills. I started to learn to program way back in my first year of college in 2019. To be comfortable with it, I am actively initiating to be the one to develop some of our school projects. Creating those projects made me realize that I enjoy creating user interfaces and made me decide to start learning Web Development. With that, I am open to every opportunity that will come along the way.
              </p>

              <ListGroup>
                <ListGroup.Item className={`${isNightMode ? 'bg-dark border' : 'bg-dark'}`}>
                  <h3 className={`fst-italic text-center text-xl-start fs-3 ${isNightMode ? 'text-darkModeAccentColor' : 'text-contrastColor'}`}>Relevant Experiences/Activities</h3>
                </ListGroup.Item>
                <ListGroup.Item className={`${isNightMode && 'bg-dark border'}`}>
                  <h3 className={`fs-4 p-0 m-0 text-center text-xl-start ${isNightMode && 'text-contrastColor'}`}>Exploring Computer Science Program Webinar</h3>
                  <p className="fs-6 fst-italic text-muted text-center text-xl-start">by Association of Computer Science Students on September 03, 2022</p>
                </ListGroup.Item>

                <ListGroup.Item className={`${isNightMode && 'bg-dark border'}`}>
                  <h3 className={`fs-4 p-0 m-0 text-center text-xl-start ${isNightMode && 'text-contrastColor'}`}>How to start in Web Development from scratch</h3>
                  <p className="fs-6 fst-italic text-muted text-center text-xl-start">by Refocus on September 28, 2022</p>
                </ListGroup.Item>

                <ListGroup.Item className={`${isNightMode && 'bg-dark border'}`}>
                  <h3 className={`fs-4 p-0 m-0 text-center text-xl-start ${isNightMode && 'text-contrastColor'}`}>Zuitt Free Coding Bootcamp</h3>
                  <p className="fs-6 fst-italic text-muted text-center text-xl-start">by Zuitt Coding Bootcamp on January 14, 2023</p>
                </ListGroup.Item>

                <ListGroup.Item className={`${isNightMode && 'bg-dark border'}`}>
                  <p className={`fs-4 p-0 m-0 text-center text-xl-start ${isNightMode && 'text-contrastColor'}`}>Finalist in Programming Competition</p>
                  <p className="fs-6 fst-italic text-muted text-center text-xl-start">by Association of Computer Science Students</p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About