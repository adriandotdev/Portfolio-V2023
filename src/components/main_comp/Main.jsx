import React from 'react'
import { Container } from 'react-bootstrap';

import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Certificates from './Certificates';

function Main() {
  return (
    <Container>
        <HeroSection />
        <About />
        <Skills />
        <Certificates />
    </Container>    
  )
}

export default Main