import React, { useContext } from 'react'
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

import ProjectTechnology from '../sub_comp/ProjectTechnology';

import '../../css/main.css';

import { ThemeContext } from '../../App';

function Skills() {

  const { isNightMode } = useContext(ThemeContext);
  return (
    <Container id="scrollspySkills" className="my-8 skills">

        <div>
            <h1 className={`display-5 text-center mt-5 fw-bold ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Skills and Technologies</h1>
            <p className={`section--heading__divider mt-0 text-center ${isNightMode ? "text-contrastColor divider__darkmode" : "text-dark divider__daymode"}`}>N</p>
            <hr className={`${isNightMode ? "border-darkModeAccentColor" : ""}`}/>
        </div>
        

        <Row className="row-cols-1 row-cols-xl-3">
            <Col>
                <div className='d-flex flex-column align-items-center'>
                    <img className="img-fluid m-0 p-0" src="/images/Teamwork.png" alt="" />
                    <h2 className={`fs-1 font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Teamwork</h2>
                    <p className={`text-center font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                      I can work more collaboratively. A group can achieve more than a person trying to work alone. Working together is more efficient than doing tasks seperately.
                    </p>
                </div>
            </Col>
            <Col>
                <div className='d-flex flex-column align-items-center'>
                    <img className="img-fluid" src="/images/Communication.png" alt="" />
                    <h2 className={`fs-1 font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Communication</h2>
                    <p className={`text-center font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                      I can fully express my ideas. Communication is not just a one-way process. It is also significant to hear suggestions from others that might help to solve a particular problem.
                    </p>
                </div>
            </Col>
            <Col>
                <div className='d-flex flex-column align-items-center'>
                    <img className="img-fluid" src="/images/Problem-Solving.png" alt="" />
                    <h2 className={`fs-1 font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Problem-Solving</h2>
                    <p className={`text-center font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                      I am solution-oriented and can puzzle out the task within a given timeframe and not just accomplishing it but ensuring its reliability and efficiency.
                    </p>
                </div>
            </Col>
        </Row>

        <div className="mt-5">
                {/* <h1 className="display-5 text-center">Technologies</h1> */}
                <Container
                  className="container d-flex justify-content-center flex-wrap gap-3 mt-4"
                >
                  <Row className="row">
                    <Col>
                      <OverlayTrigger
                        placement="bottom"
                        overlay={ 
                        <Tooltip id='React.js'>
                          React.js
                        </Tooltip>}
                      >
                       
                       <span>
                        <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js Logo"/>
                        </span>
                      </OverlayTrigger>
                      
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>
                      <OverlayTrigger
                        placement="bottom"
                        overlay={ 
                        <Tooltip id='MySQL'>
                          MySQL
                        </Tooltip>}
                      >
                       
                       <span>
                        <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL Logo"/>
                        </span>
                      </OverlayTrigger>
                      
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={ 
                        <Tooltip id='Express.js'>
                          Express.js
                        </Tooltip>}
                      >
                       
                       <span>
                        <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Expres.js Logo"/>
                        </span>
                      </OverlayTrigger>
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>
                      <OverlayTrigger
                          placement="bottom"
                          overlay={ 
                          <Tooltip id='Node.js'>
                            Node.js
                          </Tooltip>}
                        >
                        
                          <span>
                            <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Logo"/>
                          </span>
                      </OverlayTrigger>
                      
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>
                      <OverlayTrigger
                          placement="bottom"
                          overlay={ 
                          <Tooltip id='HTML5'>
                            HTML5
                          </Tooltip>}
                        >
                        
                          <span>
                            <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Logo"/>
                          </span>
                      </OverlayTrigger>
                      
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>
                      <OverlayTrigger
                            placement="bottom"
                            overlay={ 
                            <Tooltip id='CSS3'>
                              CSS3
                            </Tooltip>}
                          >
                          
                            <span>
                              <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Logo"/>
                            </span>
                        </OverlayTrigger>
                      
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>

                    <OverlayTrigger
                            placement="bottom"
                            overlay={ 
                            <Tooltip id='JavaScript'>
                              JavaScript
                            </Tooltip>}
                          >
                          
                            <span>
                              <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo"/>
                            </span>
                        </OverlayTrigger>
                      
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>
                      <OverlayTrigger
                            placement="bottom"
                            overlay={ 
                            <Tooltip id='TailwindCSS'>
                              TailwindCSS
                            </Tooltip>}
                          >
                          
                            <span>
                              <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS CSS Framework Logo"/>
                            </span>
                        </OverlayTrigger>
                    </Col>
                  </Row>
                  
                  <Row className="row">
                    <Col>
                      <OverlayTrigger
                            placement="bottom"
                            overlay={ 
                            <Tooltip id='Bootstrap'>
                              Bootstrap
                            </Tooltip>}
                          >
                          
                            <span>
                               <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap CSS Framework Logo"/>
                            </span>
                        </OverlayTrigger>
                    </Col>
                  </Row>

                  <Row className="row">
                    <OverlayTrigger
                            placement="bottom"
                            overlay={ 
                            <Tooltip id='SCSS'>
                              SASS
                            </Tooltip>}
                          >
                            <span>
                               <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS CSS Preprocessor Logo"/>
                            </span>
                        </OverlayTrigger>
                  </Row>

                  <Row className="row">
                    <Col>
                    <OverlayTrigger
                            placement="bottom"
                            overlay={ 
                            <Tooltip id='Java Programming'>
                              Java
                            </Tooltip>}
                          >
                            <span>
                               <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java Programming Language Logo"/>
                            </span>
                        </OverlayTrigger>
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>
                      <OverlayTrigger
                            placement="bottom"
                            overlay={ 
                            <Tooltip id='Java Programming'>
                              C-Sharp
                            </Tooltip>}
                          >
                            <span>
                               <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C Sharp Programming Language Logo"/>
                            </span>
                        </OverlayTrigger>
                      
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>
                      <OverlayTrigger
                            placement="bottom"
                            overlay={ 
                            <Tooltip id='Unity Game Engine'>
                              Unity Game Engine
                            </Tooltip>}
                          >
                            <span>
                               <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity Game Engine Logo"/>
                            </span>
                        </OverlayTrigger>
                      
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>
                     <OverlayTrigger
                            placement="bottom"
                            overlay={ 
                            <Tooltip id='Git'>
                              Git
                            </Tooltip>}
                          >
                            <span>
                               <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git Version Control Logo"/>
                            </span>
                        </OverlayTrigger>
                      
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col>
                      <OverlayTrigger
                            placement="bottom"
                            overlay={ 
                            <Tooltip id='Visual Studio Code'>
                              Vistual Studio Code
                            </Tooltip>}
                          >
                            <span>
                               <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Visual Studio Code Logo"/>
                            </span>
                        </OverlayTrigger>
                      
                    </Col>
                  </Row>
                </Container>
              </div>
    </Container>
  )
}

export default Skills