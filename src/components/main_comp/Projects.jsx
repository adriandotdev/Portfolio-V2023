/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";

// User Defined Components
import Project from "../sub_comp/Project";

import { motion } from "framer-motion";
import { ThemeContext } from "../../App";
import {
	containerAnimation,
	fromBottomAnimation,
} from "../../motions/projects";

function Projects() {
	const { isNightMode } = useContext(ThemeContext);

	return (
		<motion.div
			variants={containerAnimation}
			initial="initial"
			whileInView="whileInView"
			viewport="viewport"
			id="scrollspyProjects"
			className="projects container my-8 pt-5"
		>
			<motion.div variants={containerAnimation} viewport="viewport">
				<motion.h1
					variants={fromBottomAnimation}
					viewport="viewport"
					className={`display-5 text-center mt-5 fw-bold ${
						isNightMode ? "text-darkModeAccentColor" : "text-dark"
					}`}
				>
					Projects
				</motion.h1>
				<motion.p
					variants={fromBottomAnimation}
					viewport="viewport"
					className={`section--heading__divider mt-0 text-center ${
						isNightMode
							? "text-contrastColor divider__darkmode"
							: "text-dark divider__daymode"
					}`}
				>
					N
				</motion.p>
				<motion.hr
					className={`${isNightMode ? "border-darkModeAccentColor" : ""}`}
				/>
			</motion.div>

			<motion.div variants={containerAnimation} viewport="viewport">
				{/* The Daily Bytes */}
				<Project
					title="The Daily Bytes"
					description="The Daily Bytes is a blog platform integrated with Tiptap editor that supports Notion-style editing."
					img={{
						src: "/The_Daily_Bytes.png",
						alt: "The Daily Bytes",
					}}
					gif={{
						src: "/The_Daily_Bytes.png",
						alt: "The Daily Bytes",
					}}
					technologies={[
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
							alt: "NextJS",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
							alt: "PostgreSQL",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
							alt: "TailwindCSS",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
							alt: "Supabase",
						},
					]}
					links={{
						sourceCode: "https://github.com/adriandotdev/blog-site-nextjs",
						site: "https://blog-site-nextjs-adriandotdevs-projects.vercel.app/",
						siteTitle: "Live Site",
					}}
				/>

				{/* Kayamanan: The Hunt for Philippine Treasures */}
				<Project
					title="Kayamanan: The Hunt for Philippine Treasures"
					description="Our thesis software fulfills the requirements for the BS Computer Science degree. It is a 2D Android role-playing game that teaches Philippine Culture and History. I was assigned to implement the overall functionalities of the software. During development, I learned how to use object-oriented design patterns such as Observer and Singleton."
					img={{
						src: "/Kayamanan.png",
						alt: "Kayamanan: The Hunt for Philippine Treasures main menu interface",
					}}
					gif={{
						src: "/Quest 1.gif",
						alt: "Kayamanan: The Hunt for Philippine Treasures sample output",
					}}
					technologies={[
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
							alt: "C Sharp programming language",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
							alt: "Unity Game Engine Logo",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
							alt: "Android logo",
						},
					]}
					links={{
						sourceCode:
							"https://github.com/adriandotdev/Kayamanan-A-Hunt-for-Philippine-Treasures-THESIS-",
						site: "https://drive.google.com/file/d/1lxKxh3pmjxMk9wxz70cI5to6__ZQK4_k/view?usp=sharing",
						siteTitle: "APK File",
					}}
					isReversed
				/>

				<Project
					title="Yan-Yan's Store: PMS"
					description="A Project Management System for our sari-sari store. Here, I applied what I learned in NodeJS, and ExpressJS such as Authorization, and Authentication using http-cookie. I mostly learned by doing this is the CRUD functionality of MongoDB."
					img={{
						src: "/Yanyan_Store.png",
						alt: "Yan-Yan's Store user interface",
					}}
					gif={{
						src: "/Products Overview.gif",
						alt: "Yan-Yan's Store sample output",
					}}
					technologies={[
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
							alt: "C Sharp programming language",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
							alt: "Unity Game Engine Logo",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
							alt: "Android logo",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
							alt: "Android logo",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
							alt: "Android logo",
						},
					]}
					links={{
						sourceCode:
							"https://github.com/adriandotdev/yanyan-store/tree/master",
					}}
				/>

				{/* Food Hub Ordering System Project */}
				<Project
					title="Food Hub Ordering System"
					description="Our project was focused on System Analysis and Design, as well as Software Engineering. We developed an ordering system for small food businesses, utilizing Responsive Web Design with TailwindCSS, and DaisyUI for pre-made components. We also used React.js for component-based UI and Node.js and Express.js for the backend. Through this project, I learned about state management through ContextAPI, as well as the MVC pattern, with SQL as the Model, React.js as the View, and Express and Node.js as the Controller."
					img={{
						src: "/Food Hub.png",
						alt: "Food Hub Ordering System sample user interface",
					}}
					gif={{
						src: "/Cart.gif",
						alt: "Food Hub Ordering System sample output",
					}}
					technologies={[
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
							alt: "react.js logo",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
							alt: "MySQL logo",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
							alt: "Express.js logo",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
							alt: "Node.js Logo",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
							alt: "TailwindCSS CSS Framework Logo",
						},
					]}
					links={{
						sourceCode:
							"https://github.com/adriandotdev/Food-Hub-Software-Engineering-",
					}}
					isReversed
				/>
			</motion.div>

			{isNightMode && (
				<motion.div>
					<div className="projects-bg-night" role="img" loading="lazy"></div>
				</motion.div>
			)}

			{!isNightMode && (
				<motion.div>
					<div className="projects-bg-light" role="img" loading="lazy"></div>
				</motion.div>
			)}

			<motion.div
				className="text-center mt-5 fw-bold"
				whileHover={{
					scale: 1.2,
					color: "red",
					transition: {
						type: "spring",
						stiffness: 350,
					},
				}}
			>
				<a
					href="https://github.com/adriandotdev"
					target="_blank"
					className={`${isNightMode ? "text-white" : "text-dark"}`}
					rel="noreferrer"
				>
					Visit my GitHub Profile to see my other projects
				</a>
			</motion.div>
		</motion.div>
	);
}

export default Projects;
