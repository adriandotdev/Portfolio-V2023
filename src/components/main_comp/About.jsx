import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
// import '../../css/main.css';
import { motion } from "framer-motion";
import { ThemeContext } from "../../App";

function About() {
	const { isNightMode, filters } = useContext(ThemeContext);

	const titleSection = {
		initial: {
			opacity: 0,
		},
		whileInView: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
		viewport: {
			once: true,
		},
	};

	const titleAnimation = {
		initial: {
			y: 150,
			opacity: 0,
		},
		whileInView: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 150,
				duration: 0.5,
			},
		},
		viewport: {
			once: true,
		},
	};

	const image = {
		initial: {
			opacity: 0,
		},
		whileInView: {
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 50,
				duration: 0.5,
			},
		},
		viewport: {
			once: true,
		},
	};

	return (
		<motion.div
			id="scrollspyAboutMe"
			variants={titleSection}
			initial="initial"
			whileInView="whileInView"
			viewport="viewport"
			className="about container mt-8 pt-5"
		>
			<motion.div
				variants={titleSection}
				viewport="viewport"
				className="section__title"
			>
				<motion.h1
					variants={titleAnimation}
					viewport="viewport"
					className={`display-5 text-center m-0 fw-bold ${
						isNightMode ? "text-darkModeAccentColor" : "text-dark"
					}`}
				>
					About
				</motion.h1>
				<motion.p
					variants={titleAnimation}
					viewport="viewport"
					className={`section--heading__divider mt-0 text-center ${
						isNightMode
							? "text-contrastColor divider__darkmode"
							: "text-dark divider__daymode"
					}`}
				>
					N
				</motion.p>
				<hr className={`${isNightMode ? "border-darkModeAccentColor" : ""}`} />
			</motion.div>

			<motion.div className="container" viewport="viewport">
				<motion.div
					variants={titleSection}
					viewport="viewport"
					className="row align-items-start"
				>
					<motion.div
						variants={image}
						viewport="viewport"
						className="col-12 col-xl-6 text-center align-self-start"
					>
						<img
							src="/images/GRAD_PIC_MOBILE.jpg"
							alt=""
							className="img-fluid d-block d-xl-none"
							loading="lazy"
						/>

						<img
							src="/images/GRAD_PIC_DESKTOP.jpg"
							alt=""
							className="img-fluid d-none d-xl-block"
							loading="lazy"
						/>
					</motion.div>

					<motion.div
						variants={titleSection}
						viewport="viewport"
						className="col-12 col-xl-6"
					>
						<motion.h1
							variants={titleAnimation}
							viewport="viewport"
							className={`text-center text-xl-start mt-3 mt-xl-0 font-montserrat-medium ${
								isNightMode ? "text-darkModeAccentColor" : "text-dark"
							}`}
						>
							{"Hello! I'm Adrian Nads"}
						</motion.h1>

						<motion.p
							variants={titleAnimation}
							viewport="viewport"
							id="about--paragraph"
							className={`text-center text-xl-start ${
								isNightMode ? "text-contrastColor" : "text-bodyTextColor"
							}`}
						>
							I am a solution-oriented Computer Science graduate from Pamantasan
							ng Cabuyao, open to entry-level roles in Software
							Engineering/Development. I acquired hands-on experience through
							academic coursework and personal projects. Learning on how to
							learn is crucial in my chosen field, so during my free time, I
							dedicate myself to learn and create projects that will help expand
							my knowledge and skills.
							<br />
							<br />
							During my internship, I served as a Front-End Developer Intern,
							and received an outstanding performance award from the company. I
							also assigned as a team leader, and given a chance to experience
							collaboration with other amazing developers. It provided me a
							sense of accomplishment, and highlighted areas for improvement.
							<br />
							<br />
							Acquiring a college degree is just a first milestone in my
							professional journey, and I will strongly value to have concrete
							guidance and support to further improve my skills. Therefore, I am
							eagerly seeking valuable opportunities that may come my way.
						</motion.p>

						<motion.div
							className="d-xl-none"
							variants={titleAnimation}
							viewport="viewport"
						>
							<ListGroup>
								<ListGroup.Item
									className={`${isNightMode ? "bg-dark border" : "bg-dark"}`}
								>
									<h3
										className={`fst-italic text-center text-xl-start fs-3 ${
											isNightMode
												? "text-darkModeAccentColor"
												: "text-contrastColor"
										}`}
									>
										Relevant Experiences/Activities
									</h3>
								</ListGroup.Item>

								<ListGroup.Item
									className={`${isNightMode && "bg-dark border"}`}
								>
									<h3
										className={`fs-4 p-0 m-0 text-center text-xl-start ${
											isNightMode && "text-contrastColor"
										}`}
									>
										Prototype and Software Exposition
									</h3>
									<p
										className={`fs-6 fst-italic text-center text-xl-start ${
											isNightMode && "text-contrastColor"
										}`}
									>
										associated by Pamantasan ng Cabuyao
									</p>
								</ListGroup.Item>

								<ListGroup.Item
									className={`${isNightMode && "bg-dark border"}`}
								>
									<h3
										className={`fs-4 p-0 m-0 text-center text-xl-start ${
											isNightMode && "text-contrastColor"
										}`}
									>
										Front End Developer Intern
									</h3>
									<p
										className={`fs-6 fst-italic text-center text-xl-start ${
											isNightMode && "text-contrastColor"
										}`}
									>
										at Pixel8 Web Solutions & Consultancy Inc (February - April
										2023)
									</p>
								</ListGroup.Item>

								<ListGroup.Item
									className={`${isNightMode && "bg-dark border"}`}
								>
									<h3
										className={`fs-4 p-0 m-0 text-center text-xl-start ${
											isNightMode && "text-contrastColor"
										}`}
									>
										Programming Training and Competition (Finalist)
									</h3>
									<p
										className={`fs-6 fst-italic text-center text-xl-start ${
											isNightMode && "text-contrastColor"
										}`}
									>
										by Association of Computer Science Students (ACSS)
									</p>
								</ListGroup.Item>
							</ListGroup>
						</motion.div>
						<motion.div
							className="d-none d-xl-block"
							variants={titleAnimation}
							viewport="viewport"
						>
							<h2
								className={`${
									isNightMode
										? "text-darkModeAccentColor"
										: "text-bodyTextColor"
								}`}
							>
								Relevant Experiences and Activities
							</h2>
							<ul>
								<li>
									<div
										className={`h5 mt-3 ${isNightMode && "text-contrastColor"}`}
									>
										Prototype and Software Exposition
									</div>
									<span
										className={`${isNightMode && "text-darkModeAccentColor"}`}
									>
										associated by Pamantasan ng Cabuyao
									</span>
								</li>
								<li>
									<div
										className={`h5 mt-3 ${isNightMode && "text-contrastColor"}`}
									>
										Front End Developer Intern
									</div>
									<span
										className={`${isNightMode && "text-darkModeAccentColor"}`}
									>
										at Pixel8 Web Solutions & Consultancy Inc. (February - April
										2023)
									</span>
								</li>
								<li>
									<div
										className={`h5 mt-3 ${isNightMode && "text-contrastColor"}`}
									>
										Programming Training and Competition (Finalist)
									</div>
									<span
										className={`${isNightMode && "text-darkModeAccentColor"}`}
									>
										by Association of Computer Science Students (ACSS){" "}
									</span>
								</li>
							</ul>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.div>

			{isNightMode && (
				<motion.div variants={filters} viewport="viewport">
					<div className="about-bg-night" role="img" loading="lazy"></div>
				</motion.div>
			)}

			{!isNightMode && (
				<motion.div variants={filters} viewport="viewport">
					<div className="about-bg-light" role="img" loading="lazy"></div>
				</motion.div>
			)}
		</motion.div>
	);
}

export default About;
