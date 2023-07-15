import { Container } from 'react-bootstrap';

import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Certificates from './Certificates';
import Projects from './Projects';
import Footer from './Footer';

// const HeroSection = lazy(() => import('./HeroSection'));

function Main() {

  return (
    <>
      <Container as="main">
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