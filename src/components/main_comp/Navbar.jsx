import { useContext, useEffect, useRef, useState } from "react";

import { ThemeContext } from "../../App";
import "../../css/navbar.min.css";

function Navbar() {
	const { isNightMode, setNightMode, setMobileMenuOpen } =
		useContext(ThemeContext);
	const [isWindowScrolled, setWindowToScrolled] = useState(false);
	const themeToggleCircle = useRef(null);
	const navRef = useRef(null);

	// A useEffect to add a scroll event to window object.
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 10) {
				setWindowToScrolled(true);
			} else {
				setWindowToScrolled(false);
			}
		});

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	// A useEffect that runs whenever the 'isNightMode' state changes.
	useEffect(() => {
		if (!isNightMode) {
			themeToggleCircle.current.classList.remove("switch--circle__left");
			themeToggleCircle.current.classList.add("switch--circle__right");

			document.body.style.backgroundColor = "white";
		} else {
			themeToggleCircle.current.classList.add("switch--circle__left");
			themeToggleCircle.current.classList.remove("switch--circle__right");

			document.body.style.backgroundColor = "#000B20";
		}
	}, [isNightMode]);

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
		<nav
			ref={navRef}
			id="portfolio-navbar"
			className={`portfolio-navbar navbar px-3 navbar-expand-lg fixed-top navbar-dark bg-dark 
    ${isWindowScrolled && isNightMode && ""}`}
		>
			<div className="container">
				<div className="row w-100 justify-content-between justify-content-sm-between align-items-center">
					<div className="col-6">
						<a
							tabIndex="0"
							role="button"
							className="focusable navbar-brand fw-bold"
							onClick={() => {
								document
									.querySelector("#scrollspyHeroSection")
									.scrollIntoView({ behavior: "smooth" });
							}}
							onKeyDown={(e) => {
								if (e.key === " " || e.key === "Enter") {
									e.preventDefault();
									document
										.querySelector("#scrollspyHeroSection")
										.scrollIntoView({ behavior: "smooth" });
								}
							}}
						>
							<img
								id="nav-icon"
								src="/images/Logo.png"
								alt="Nads' portfolio logo"
							/>
						</a>
					</div>

					<div
						tabIndex="0"
						role="button"
						className="col-2 d-lg-none hamburger p-0"
						onClick={() => setMobileMenuOpen(true)}
					>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</div>
					{/* <div className="col-2 ms-md-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div> */}
				</div>

				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav d-flex column gap-4 d-lg-flex gap-lg-4 align-items-lg-center pt-4 pb-4 pt-lg-0 pb-lg-0">
						{/* Navbar Items */}
						{items.map((item) => (
							<a
								tabIndex="0"
								role="button"
								key={item.scrollSpy}
								onClick={() => {
									document
										.querySelector(item.scrollSpy)
										.scrollIntoView({ behavior: "smooth" });
								}}
								onKeyDown={(e) => {
									if (e.key === " " || e.key === "Enter") {
										e.preventDefault();
										document
											.querySelector(item.scrollSpy)
											.scrollIntoView({ behavior: "smooth" });
									}
								}}
								className="focusable navbar-link h6 text-decoration-none mb-0 text-darkModeAccentColor fw-bold text-nowrap"
							>
								{item.title}
							</a>
						))}

						{/* Toggle Button (Day/Night Mode) */}
						<div
							className="focusable"
							role="button"
							tabIndex="0"
							onClick={() => {
								setNightMode((prevValue) => !prevValue);
							}}
							onKeyDown={(e) => {
								if (e.key === " " || e.key === "Enter") {
									e.preventDefault();
									setNightMode((prevValue) => !prevValue);
								}
							}}
							id="switch"
							aria-label="Dark theme toggle"
						>
							<section id="switch__dark-icon">
								<svg
									aria-label="Moon icon"
									fill="#fff"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
								</svg>
							</section>

							<section id="switch__day-icon">
								<svg
									aria-label="Sun icon"
									fill="#e6d8c7"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z" />
								</svg>
							</section>

							<div ref={themeToggleCircle} className="switch--circle"></div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
