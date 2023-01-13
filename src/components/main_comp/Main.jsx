import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap';

import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Certificates from './Certificates';
import Projects from './Projects';
import Footer from './Footer';

function Main() {

  useEffect(() => {

    document.title = 'Adrian.dev';
  }, []);
  
  return (
    <>
      <Container>
        <HeroSection />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        
      </Container>    
      <Footer />
    </>

  )
}

export default Main