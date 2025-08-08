import { motion } from "framer-motion";
import { useContext } from "react";
import { FaArrowRight, FaMoon, FaSun } from "react-icons/fa6";
import { ThemeContext } from "../../App";

function MobileNavigation() {
	const { setMobileMenuOpen, isNightMode, setNightMode, showScrollY } =
		useContext(ThemeContext);
	const mobileMenuContainer = {
		initial: {
			x: -1000,
		},
		animate: {
			x: 0,
			transition: {
				staggerChildren: 0.05,
			},
		},
		exit: {
			x: 1000,
			transition: {
				when: "afterChildren",
				staggerChildren: 0.05,
			},
		},
	};

	const mobileMenu = {
		initial: {
			x: 100,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 90,
				duration: 0.05,
			},
		},
		exit: {
			x: 100,
			opacity: 0,
			transition: {
				type: "spring",
				stiffness: 90,
				duration: 0.01,
			},
		},
	};

	const titleAndBack = {
		initial: {
			y: -100,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				type: "string",
				stiffness: 90,
				bounce: 150,
				duration: 0.3,
			},
		},
		exit: {
			y: -100,
			opacity: 0,
			transition: {
				type: "string",
				stiffness: 90,
				bounce: 150,
				duration: 0.01,
			},
		},
	};

	const items = [
		{
			scrollSpy: "#scrollspyAboutMe",
			title: "About",
		},
		{
			scrollSpy: "#scrollspySkills",
			title: "Skills",
		},
		{
			scrollSpy: "#scrollspyCertificates",
			title: "Certificates",
		},
		{
			scrollSpy: "#scrollspyProjects",
			title: "Projects",
		},
	];

	return (
		<motion.div
			variants={mobileMenuContainer}
			initial="initial"
			animate="animate"
			exit="exit"
			className={`mobile-menu d-lg-none d-flex flex-column px-4 px-sm-5 gap-5 pt-5 ${
				showScrollY && "overflow-auto"
			}`}
		>
			<motion.div
				variants={titleAndBack}
				initial="initial"
				animate="animate"
				exit="exit"
				className="d-flex align-items-center justify-content-between"
			>
				<img
					role="button"
					onClick={() => {
						document
							.querySelector("#scrollspyHeroSection")
							.scrollIntoView({ behavior: "smooth" });
						setMobileMenuOpen(false);
					}}
					tabIndex="0"
					className="portfolio-logo w-50"
					src="/images/Logo.png"
					alt="Adrian Marcelo portfolio logo"
					loading="lazy"
				/>
				<div
					role="button"
					id="hamburger-icon"
					onClick={() => setMobileMenuOpen(false)}
				>
					<FaArrowRight
						style={{ width: "2rem", height: "3rem" }}
						className="text-white"
					/>
				</div>
			</motion.div>

			{items.map((item) => (
				<motion.span
					role="button"
					key={item.title}
					tabIndex="0"
					onClick={() => {
						document
							.querySelector(item.scrollSpy)
							.scrollIntoView({ behavior: "smooth" });
						setMobileMenuOpen(false);
					}}
					variants={mobileMenu}
					className="display-4 text-contrastColor"
				>
					{item.title}
				</motion.span>
			))}

			<motion.div
				variants={mobileMenu}
				tabIndex="0"
				role="button"
				onClick={() => {
					setNightMode(!isNightMode);
					setMobileMenuOpen(false);
				}}
			>
				{isNightMode ? (
					<FaSun
						style={{ width: "3rem", height: "3rem" }}
						className="text-white"
					/>
				) : (
					<FaMoon
						style={{ width: "3rem", height: "3rem" }}
						className="text-white"
					/>
				)}
			</motion.div>

			<div className="backdrop"></div>
		</motion.div>
	);
}

export default MobileNavigation;
