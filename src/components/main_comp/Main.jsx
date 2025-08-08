import { Container } from "react-bootstrap";

import About from "./About";
import Certificates from "./Certificates";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Skills from "./Skills";

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
	);
}

export default Main;
