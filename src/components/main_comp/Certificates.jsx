import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Certificates() {
  return (
    
    <Container id="scrollspyCertificates" className="my-5 pt-5">
        <div>
          <h1 className="display-5 text-center fw-bold text-dark">Certificates</h1>
          <p className='section--heading__divider'>N</p>
          <hr />
        </div>

        <Row className="justify-content-center">
          <Col className="col-12 col-lg-6">
            <div
              id="carouselExampleControls"
              className="carousel slide carousel-dark shadow-sm"
              data-bs-ride="carousel"
            >
              {/* Carousel Indicators */}
              <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>

              {/* Carousel Inner Content */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/images/JavaScript and DSA.png"
                    className="d-block w-100"
                    alt="Freecodecamp certificate for Javascript Data Structures and Algorithms"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/Responsive Web Design.png"
                    className="d-block w-100"
                    alt="Freecodecamp certificate for Responsive Web Design"
                  />
                </div>
                <div className="carousel-item">
                    <img src="/images/Frontend Development Libraries.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/images/Frontend Certificate - HTML.png" className="d-block w-100" alt="..." />
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
        </Row>
      </Container>
  )
}

export default Certificates