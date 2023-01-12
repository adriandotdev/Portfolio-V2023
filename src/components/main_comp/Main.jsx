import React from 'react'
import { Container } from 'react-bootstrap';

import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';

function Main() {
  return (
    <Container>
        <HeroSection />
        <About />
        <Skills />
    </Container>    
  )
}

export default Main