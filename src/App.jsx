import "./App.css";
// import './css/main.css';
import "./css/filter-bg.min.css";
import "./css/main.min.css";
import "./css/mobile-menu.min.css";

import { AnimatePresence } from "framer-motion";
import {
	createContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import Main from "./components/main_comp/Main";
import MobileNavigation from "./components/main_comp/MobileNavigation";
import Navbar from "./components/main_comp/Navbar";

export const ThemeContext = createContext(null);

function App() {
	const aboutRef = useRef();
	const [isNightMode, setNightMode] = useState(true);
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [showScrollY, setScrollY] = useState(false);
	const filters = {
		viewport: {
			once: true,
		},
	};

	useLayoutEffect(() => {
		document.title = "Adrian Nads Marcelo | Portfolio";
		console.log("Rendered");
	}, []);

	// Registering resize event
	useEffect(() => {
		const resize = () => {
			if (window.innerWidth >= 992) {
				setMobileMenuOpen(false);
			}

			if (window.innerHeight <= 800) {
				setScrollY(true);
			} else {
				setScrollY(false);
			}
		};
		window.addEventListener("resize", resize);

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
		}
	}, [isMobileMenuOpen]);

	return (
		<div className={`${isMobileMenuOpen && "overflow-hidden"}`}>
			<ThemeContext.Provider
				value={{
					isNightMode,
					setNightMode,
					isMobileMenuOpen,
					setMobileMenuOpen,
					aboutRef,
					filters,
					showScrollY,
				}}
			>
				<Navbar />
				<Main />
				<AnimatePresence>
					{isMobileMenuOpen && <MobileNavigation />}
				</AnimatePresence>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
