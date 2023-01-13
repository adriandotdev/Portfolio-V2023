import React from 'react'
import { Container } from 'react-bootstrap';

import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Certificates from './Certificates';
import Projects from './Projects';

function Main() {
  return (
    <Container>
        <HeroSection />
        <About />
        <Skills />
        <Certificates />
        <Projects />
    </Container>    
  )
}

export default Main