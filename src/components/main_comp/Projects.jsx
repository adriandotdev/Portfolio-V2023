import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

// User Defined Components
import ProjectTechnology from '../sub_comp/ProjectTechnology';

function Projects() {
  return (
    <Container id="scrollspyProjects" className="mt-3 pt-5 mb-5">
        <div>
          <h1 className="display-5 text-center fw-bold mb-2">Projects</h1>
          <hr />
        </div>

        <Container>
        
          <Row className="bg-light p-md-3 mb-5">
            
            <Col className="col-12 col-lg-6 mb-3 w-100">
              <Row className="row">
                <Col className="col-12 col-lg-6">
                  <img
                    src="/images/Screenshot (1398).png"
                    alt=""
                    className="img-fluid shadow"
                  />
                </Col>
                <Col className="col-12 col-lg-6">
                  <h1 className="display-6 fw-bold my-2 text-dark text-lg-end">
                    Kayamanan: The Hunt for Philippine Treasures
                  </h1>
                  <p className="text-lg-end">
                    Our thesis software for the requirement in Bachelor of Science in Computer Science. An Android game that teaches Philippine Culture and History. Our group consists of 4 members, and I'm the one who implemented the overall functionalities of the software. I learned how to use Object-Oriented design patterns such as Observer and Singleton patterns. We utilized C# programming language along with Unity Game Engine.
                  </p>

                  <div className="mb-3">
                    <div className="mx-1 row justify-content-lg-end gap-3">
                      <div className="col-1 m-0 p-0">
                        <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C Sharp programming language" />
                      </div>

                      <div className="col-1 m-0 p-0">
                        <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity Game Engine Logo" />
                      </div>
                      <div className="col-1 m-0 p-0">
                        <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android logo"/>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div>
                    <div className="d-lg-flex justify-content-lg-end gap-2">
                      <a target="blank" className="btn btn-dark mx-1" href="https://github.com/adriandotdev/Kayamanan-A-Hunt-for-Philippine-Treasures" role="button"
                        >View Source Code</a
                      >
                      <a target="blank" className="btn btn-outline-secondary" href="https://drive.google.com/file/d/15zMSkTLew0A-P7mSoBvX03snFDxYhahs/view?usp=share_link" role="button"
                        >APK File</a
                      >
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="bg-light">
            <Col className="col-12 col-lg-6 ms-auto mb-3 p-3 w-100">
              <Row className="flex-lg-row-reverse">
                <Col className="col-12 col-lg-6">
                  <img
                    src="/images/Food Hub.png"
                    alt=""
                    className="img-fluid shadow"
                  />
                </Col>

                <Col className="col-12 col-lg-6">
                  <h1 className="display-6 my-2 fw-bold text-dark">
                    Food Hub Ordering System
                  </h1>
                  <p>
                    Our Software Analysis and Design, and Software Engineering 1 - 2 project. An ordering system for small food businesses. I utilized Responsive Web Design with TailwindCSS and DaisyUI for pre-made components. React.js also used for component-based UI with Node and Express.js for backend. By doing this project, I learned the State-Management through ContextAPI, and MVC pattern as the SQL as the Model, React.js as View and Express and Node as the Controller.
                  </p>
                  <div className="mb-3">
                    <Row className="justify-content-start gap-2 mx-1">
                      <Col className="col-1 m-0 p-0">
                        <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react.js logo"/>
                      </Col>

                      <Col className="col-1 m-0 p-0">
                         <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL logo"/>
                      </Col>

                      <Col className="col-1 m-0 p-0">
                        <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js logo"/>
                      </Col>

                      <Col className="col-1 m-0 p-0">
                        <ProjectTechnology src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' alt="Node.js Logo"/>
                      </Col>

                      <Col className="col-1 m-0 p-0">

                        <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS CSS Framework Logo"/>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <a target="blank" className="btn btn-dark" href="https://github.com/adriandotdev/Food-Hub-Software-Engineering-" role="button"
                      >View Source Code</a
                    >
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
  )
}

export default Projects