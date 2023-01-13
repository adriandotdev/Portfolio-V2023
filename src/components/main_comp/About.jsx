import React from 'react'
import { ListGroup } from 'react-bootstrap'

function About() {
  return (
    <div className="about container mt-5 pt-5">
        <div>
          <h1 className="display-5 text-center fw-bold mb-2">About</h1>
          <hr />
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-center">
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
              <h1 className="display-5 text-center text-lg-start mt-3 mt-lg-0">
                Hello! I'm Adrian Nads
              </h1>

              <p className="text-muted text-center text-lg-start">
                I am a solution-oriented Web Developer from the Philippines. I do programming in general for almost 4 years, starting
                way back in 2019, and currently a 4th year BS Computer Science student at Pamantasan Ng Cabuyao, passionate about
                creating school and personal projects especially those related to Data Structures Algorithms, Web Development, and GUI
                (creating user interfaces). I also realized before, that I love creating user interfaces when doing projects in Java
                Swing, and that made me start to self-learn Web Development through the help of Youtube and other free programming
                resources. I know that there's so much to learn in the field of the tech industry, but I am eager and willing to learn
                new concepts and knowledge, and hoping to collaborate with other amazing developers. I am also open to new opportunities
                that come along to way.
              </p>

              <ListGroup>
                <ListGroup.Item variant="dark">
                  <h3 className='fst-italic text-center text-lg-start'>Relevant Experiences/Activities</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="fs-4 p-0 m-0 text-center text-lg-start">Exploring Computer Science Program Webinar</p>
                  <p className="fs-6 fst-italic text-secondary text-center text-lg-start">by Association of Computer Science Students on September 03, 2022</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="fs-4 p-0 m-0 text-center text-lg-start">How to start in Web Development from scratch</p>
                  <p className="fs-6 fst-italic text-secondary text-center text-lg-start">by Refocus on September 28, 2022</p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About