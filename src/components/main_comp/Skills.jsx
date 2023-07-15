import { useContext } from 'react'
import { Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ProjectTechnology from '../sub_comp/ProjectTechnology';
import { ThemeContext } from '../../App';
import { motion } from 'framer-motion';

function Skills() {

  const { isNightMode, filters } = useContext(ThemeContext);

  const containerAnimation = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    viewport: {
      once: true
    }
  }

  const titleAnimation = {

    initial: {
      y: 150,
      opacity: 0
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        duration: .3,
      }
    },
    viewport: {
      once: true
    }
  }

  const techContainer = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    },
    viewport: {
      once: true
    }
  }

  return (
    <motion.div variants={containerAnimation} initial="initial" whileInView="whileInView" viewport="viewport" id="scrollspySkills" className="pt-5 container my-8 skills" >

      <motion.div variants={containerAnimation} viewport="viewport">
        <motion.h1 variants={titleAnimation} viewport="viewport" className={`display-5 text-center mt-5 fw-bold ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Skills and Technologies</motion.h1>

        <motion.p variants={titleAnimation} viewport="viewport" className={`section--heading__divider mt-0 text-center ${isNightMode ? "text-contrastColor divider__darkmode" : "text-dark divider__daymode"}`}>N</motion.p>
        <hr className={`${isNightMode ? "border-darkModeAccentColor" : ""}`} />
      </motion.div>


      <motion.div variants={containerAnimation} viewport="viewport" className="row row-cols-1 row-cols-xl-3">
        <Col>
          <motion.div variants={titleAnimation} viewport="viewport" className='d-flex flex-column align-items-center'>
            <img className="img-fluid m-0 p-0" src="/images/Teamwork.png" alt="A graphic for teamwork" loading='lazy' />
            <h2 className={`fs-1 font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Teamwork</h2>
            <p className={`text-center font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
              I can work more collaboratively. A group can achieve more than an individual working alone. Working together is more efficient than doing tasks separately.
            </p>
          </motion.div>
        </Col>
        <Col>
          <motion.div variants={titleAnimation} viewport="viewport" className='d-flex flex-column align-items-center'>
            <img className="img-fluid" src="/images/Communication.png" alt="A graphic for communication" loading='lazy' />
            <h2 className={`fs-1 font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Communication</h2>
            <p className={`text-center font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
              I can fully express my ideas. Communication is not just a one-way process. It is also significant to hear suggestions from others that might help solve a particular problem.
            </p>
          </motion.div>
        </Col>
        <Col>
          <motion.div variants={titleAnimation} viewport="viewport" className='d-flex flex-column align-items-center'>
            <img className="img-fluid" src="/images/Problem-Solving.png" alt="A graphic for problem-solving" loading='lazy' />
            <h2 className={`fs-1 font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Problem-Solving</h2>
            <p className={`text-center font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
              I am solution-oriented and can figure out a task within a given timeframe, not just accomplish it, but also ensure its reliability and efficiency.
            </p>
          </motion.div>
        </Col>
      </motion.div>

      <motion.div className="mt-5">
        {/* <h1 className="display-5 text-center">Technologies</h1> */}
        <motion.div
          variants={techContainer}
          viewport="viewport"
          className="container d-flex justify-content-center flex-wrap gap-3 mt-4"
        >
          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='React.js'>
                    React.js
                  </Tooltip>}
              >

                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js Logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='MySQL'>
                    MongoDB
                  </Tooltip>}
              >

                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='MySQL'>
                    MySQL
                  </Tooltip>}
              >

                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL Logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='Express.js'>
                    Express.js
                  </Tooltip>}
              >

                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Expres.js Logo" />
                </span>
              </OverlayTrigger>
            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='Node.js'>
                    Node.js
                  </Tooltip>}
              >

                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='HTML5'>
                    HTML5
                  </Tooltip>}
              >

                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='CSS3'>
                    CSS3
                  </Tooltip>}
              >

                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>

              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='JavaScript'>
                    JavaScript
                  </Tooltip>}
              >

                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='TailwindCSS'>
                    TailwindCSS
                  </Tooltip>}
              >

                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS CSS Framework Logo" />
                </span>
              </OverlayTrigger>
            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='Bootstrap'>
                    Bootstrap
                  </Tooltip>}
              >

                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap CSS Framework Logo" />
                </span>
              </OverlayTrigger>
            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id='SCSS'>
                  SASS
                </Tooltip>}
            >
              <span>
                <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS CSS Preprocessor Logo" />
              </span>
            </OverlayTrigger>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='Java Programming'>
                    Java
                  </Tooltip>}
              >
                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java Programming Language Logo" />
                </span>
              </OverlayTrigger>
            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='Java Programming'>
                    C-Sharp
                  </Tooltip>}
              >
                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C Sharp Programming Language Logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='Unity Game Engine'>
                    Unity Game Engine
                  </Tooltip>}
              >
                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity Game Engine Logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='Git'>
                    Git
                  </Tooltip>}
              >
                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git Version Control Logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>

          <motion.div variants={titleAnimation} viewport="viewport" className="row">
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id='Visual Studio Code'>
                    Vistual Studio Code
                  </Tooltip>}
              >
                <span>
                  <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Visual Studio Code Logo" />
                </span>
              </OverlayTrigger>

            </Col>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* 
      {isNightMode && <motion.div variants={filters} viewport="viewport">
        <div className="skills-bg-night" role='img' loading='lazy'></div>
      </motion.div>}

      {!isNightMode && <motion.div variants={filters} viewport="viewport">
        <div className="skills-bg-light" role='img' loading='lazy'></div>
      </motion.div>} */}
    </motion.div>
  )
}

export default Skills