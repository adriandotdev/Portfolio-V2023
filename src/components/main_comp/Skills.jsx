import { motion } from "framer-motion";
import { useContext } from "react";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ThemeContext } from "../../App";
import ProjectTechnology from "../sub_comp/ProjectTechnology";

const containerAnimation = {
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
			duration: 0.3,
		},
	},
	viewport: {
		once: true,
	},
};

const techContainer = {
	initial: {
		opacity: 0,
	},
	whileInView: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
	viewport: {
		once: true,
	},
};

const technologies = [
	{
		tech: "TypeScript",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
		alt: "TypeScript",
	},
	{
		tech: "ReactJS",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		alt: "React.js Logo",
	},
	{
		tech: "MongoDB",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		alt: "MongoDB logo",
	},
	{
		tech: "MySQL",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
		alt: "MySQL Logo",
	},
	{
		tech: "ExpressJS",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
		alt: "Expres.js Logo",
	},
	{
		tech: "NodeJS",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		alt: "Node.js Logo",
	},
	{
		tech: "JavaScript",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		alt: "JavaScript Logo",
	},
	{
		tech: "TailwindCSS",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
		alt: "TailwindCSS CSS Framework Logo",
	},
	{
		tech: "Bootstrap",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
		alt: "Bootstrap CSS Framework Logo",
	},
	{
		tech: "SASS",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
		alt: "SASS CSS Preprocessor Logo",
	},
	{
		tech: "Java",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
		alt: "Java Programming Language Logo",
	},
	{
		tech: "CSharp",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
		alt: "C Sharp Programming Language Logo",
	},
	{
		tech: "Git",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		alt: "Git Version Control Logo",
	},
	{
		tech: "Visual Studio Code",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
		alt: "Visual Studio Code Logo",
	},
	{
		tech: "PostgreSQL",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
		alt: "PostgreSQL",
	},
	{
		tech: "Postman",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
		alt: "Postman",
	},
	{
		tech: "tRPC",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trpc/trpc-original.svg",
		alt: "tRPC",
	},
	{
		tech: "NextJS",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
		alt: "NextJS",
	},
	{
		tech: "React Native",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg",
		alt: "React Native",
	},
	{
		tech: "Linux",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
		alt: "Linux",
	},
	{
		tech: "CypressIO",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
		alt: "CypressIO",
	},
	{
		tech: "Jest",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
		alt: "Jest",
	},
	{
		tech: "GitHub",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
		alt: "GitHub",
	},
	{
		tech: "GitLab",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
		alt: "GitLab",
	},
	{
		tech: "Expo",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
		alt: "Expo",
	},
	{
		tech: "GraphQL",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
		alt: "GraphQL",
	},
	{
		tech: "Docker",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
		alt: "Docker",
	},
	{
		tech: "SocketIO",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
		alt: "SocketIO",
	},
	{
		tech: "Notion",
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
		alt: "Notion",
	},
];

function Skills() {
	const { isNightMode, filters } = useContext(ThemeContext);

	return (
		<motion.div
			variants={containerAnimation}
			initial="initial"
			whileInView="whileInView"
			viewport="viewport"
			id="scrollspySkills"
			className="pt-5 container my-8 skills"
		>
			<motion.div variants={containerAnimation} viewport="viewport">
				<motion.h1
					variants={titleAnimation}
					viewport="viewport"
					className={`display-5 text-center mt-5 fw-bold ${
						isNightMode ? "text-darkModeAccentColor" : "text-dark"
					}`}
				>
					Skills and Technologies
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

			<motion.div
				variants={containerAnimation}
				viewport="viewport"
				className="row row-cols-1 row-cols-xl-3"
			>
				<Col>
					<motion.div
						variants={titleAnimation}
						viewport="viewport"
						className="d-flex flex-column align-items-center"
					>
						<img
							className="img-fluid m-0 p-0"
							src="/images/Teamwork.png"
							alt="A graphic for teamwork"
							loading="lazy"
						/>
						<h2
							className={`fs-1 font-montserrat-medium ${
								isNightMode ? "text-darkModeAccentColor" : "text-dark"
							}`}
						>
							Teamwork
						</h2>
						<p
							className={`text-center font-montserrat ${
								isNightMode ? "text-contrastColor" : "text-bodyTextColor"
							}`}
						>
							I can work more collaboratively. A group can achieve more than an
							individual working alone. Working together is more efficient than
							doing tasks separately.
						</p>
					</motion.div>
				</Col>
				<Col>
					<motion.div
						variants={titleAnimation}
						viewport="viewport"
						className="d-flex flex-column align-items-center"
					>
						<img
							className="img-fluid"
							src="/images/Communication.png"
							alt="A graphic for communication"
							loading="lazy"
						/>
						<h2
							className={`fs-1 font-montserrat-medium ${
								isNightMode ? "text-darkModeAccentColor" : "text-dark"
							}`}
						>
							Communication
						</h2>
						<p
							className={`text-center font-montserrat ${
								isNightMode ? "text-contrastColor" : "text-bodyTextColor"
							}`}
						>
							I can fully express my ideas. Communication is not just a one-way
							process. It is also significant to hear suggestions from others
							that might help solve a particular problem.
						</p>
					</motion.div>
				</Col>
				<Col>
					<motion.div
						variants={titleAnimation}
						viewport="viewport"
						className="d-flex flex-column align-items-center"
					>
						<img
							className="img-fluid"
							src="/images/Problem-Solving.png"
							alt="A graphic for problem-solving"
							loading="lazy"
						/>
						<h2
							className={`fs-1 font-montserrat-medium ${
								isNightMode ? "text-darkModeAccentColor" : "text-dark"
							}`}
						>
							Problem-Solving
						</h2>
						<p
							className={`text-center font-montserrat ${
								isNightMode ? "text-contrastColor" : "text-bodyTextColor"
							}`}
						>
							I am solution-oriented and can figure out a task within a given
							timeframe, not just accomplish it, but also ensure its reliability
							and efficiency.
						</p>
					</motion.div>
				</Col>
			</motion.div>

			<motion.div className="mt-5">
				{/* <h1 className="display-5 text-center">Technologies</h1> */}
				<motion.div
					variants={techContainer}
					viewport="viewport"
					className="container d-flex justify-content-center flex-wrap gap-3 mt-4"
				>
					{technologies.map((technology, index) => (
						<motion.div
							key={index}
							variants={titleAnimation}
							viewport="viewport"
							className="row"
						>
							<Col>
								<OverlayTrigger
									placement="bottom"
									overlay={<Tooltip id={index}>{technology.tech}</Tooltip>}
								>
									<span>
										<ProjectTechnology
											src={technology.src}
											alt={technology.alt}
										/>
									</span>
								</OverlayTrigger>
							</Col>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			{isNightMode && (
				<motion.div variants={filters} viewport="viewport">
					<div className="skills-bg-night" role="img" loading="lazy"></div>
				</motion.div>
			)}

			{!isNightMode && (
				<motion.div variants={filters} viewport="viewport">
					<div className="skills-bg-light" role="img" loading="lazy"></div>
				</motion.div>
			)}
		</motion.div>
	);
}

export default Skills;
