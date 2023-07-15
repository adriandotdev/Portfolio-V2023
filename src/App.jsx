import './App.css';
// import './css/main.css';
import './css/mobile-menu.min.css'
import './css/main.min.css'

import { createContext, useState, useLayoutEffect, useRef, useEffect } from 'react';
import Navbar from './components/main_comp/Navbar';
import Main from './components/main_comp/Main';
import MobileNavigation from './components/main_comp/MobileNavigation';
import { AnimatePresence } from 'framer-motion';

export const ThemeContext = createContext(null);

function App() {

  const aboutRef = useRef();
  const [isNightMode, setNightMode] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  useLayoutEffect(() => {
    document.title = 'Adrian Nads Marcelo | Portfolio';
    console.log("Rendered");
  }, [])

  useEffect(() => {

    const resize = () => {

      if (window.innerWidth >= 992) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])


  return (
    <div>
      <ThemeContext.Provider value={{ isNightMode, setNightMode, isMobileMenuOpen, setMobileMenuOpen, aboutRef }}>
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
