import React from 'react'

function Navbar() {
  return (
    <nav id="portfolio-navbar" className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container">
        <div className="row w-100 justify-content-between align-items-center">
          <div className="col-6">
            <a className="navbar-brand fw-bold" href="#">Adrian.dev</a>
          </div>
          <div className="col-2 ms-md-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-lg-flex gap-lg-3">
            <a className="nav-link fw-bold text-nowrap" href="#scrollspyAboutMe">About Me</a>
            <a className="nav-link text-nowrap fw-bold" href="#scrollspySkills">Skills</a>
            <a className="nav-link text-nowrap fw-bold" href="#scrollspyCertificates">Certificates</a>
            <a className="nav-link fw-bold" href="#scrollspyProjects">Projects</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar