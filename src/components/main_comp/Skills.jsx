import React from 'react'
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

import ProjectTechnology from '../sub_comp/ProjectTechnology';

import '../../css/main.css';

function Skills() {
  return (
    <Container id="scrollspySkills" className="my-8 skills">

        <div>
            <h1 className='display-5 text-center mt-5 fw-bold text-dark'>Skills and Technologies</h1>
            <p className='section--heading__divider'>N</p>
            <hr />
        </div>
        

        <Row className="row-cols-1 row-cols-lg-3">
            <Col>
                <div className='d-flex flex-column align-items-center'>
                    <img className="img-fluid m-0 p-0" src="/images/Teamwork.png" alt="" />
                    <h2 className="fs-1 font-montserrat-medium text-dark">Teamwork</h2>
                    <p className="text-center font-montserrat text-bodyTextColor">
                      A group can achieve more than a person trying to work alone. Working together is more efficient than doing tasks in parallel.
                    </p>
                </div>
            </Col>
            <Col>
                <div className='d-flex flex-column align-items-center'>
                    <img className="img-fluid" src="/images/Communication.png" alt="" />
                    <h2 className="fs-1 text-center font-montserrat-medium text-dark">Communication</h2>
                    <p className="text-center font-montserrat text-bodyTextColor">
                      We all know that there are many jargons in a world of technology, and being able to explain and share your knowledge and ideas are really important in working in a larger team or organization.
                    </p>
                </div>
            </Col>
            <Col>
                <div className='d-flex flex-column align-items-center'>
                    <img className="img-fluid" src="/images/Problem-Solving.png" alt="" />
                    <h2 className="fs-1 text-center font-montserrat-medium text-dark">Problem-Solving</h2>
                    <p className="text-center font-montserrat">
                      Developing applications is not just for the user, but it is also a solution to a problem. Through my skillset, I am excited to contribute to solve a particular problem.
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