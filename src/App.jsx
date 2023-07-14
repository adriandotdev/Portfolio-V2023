import './App.css';
// import './css/main.css';
import './css/mobile-menu.css'
import './css/main.min.css'

import { createContext, useState, useLayoutEffect } from 'react';
import Navbar from './components/main_comp/Navbar';
import Main from './components/main_comp/Main';
import { FaSun, FaArrowRight, FaMoon } from 'react-icons/fa6'
import { AnimatePresence, motion } from 'framer-motion';

export const ThemeContext = createContext(null);

function App() {

  const [isNightMode, setNightMode] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  useLayoutEffect(() => {
    document.title = 'Adrian Nads Marcelo | Portfolio';
    console.log("Rendered");
  }, [])


  const mobileMenuContainer = {
    initial: {
      x: -1000
    },
    animate: {
      x: 0,
      transition: {
        staggerChildren: 0.05,
      }
    },
    exit: {
      x: 1000,
      transition: {
        duration: .2,
        when: 'afterChildren',
        staggerChildren: 0.05,
      }
    }
  }

  const mobileMenu = {
    initial: {
      x: 1000
    },
    animate: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        duration: 0.05,
      }
    },
    exit: {
      x: 1000,
      transition: {
        type: "spring",
        stiffness: 90,
        duration: .03
      }
    }
  }

  const titleAndBack = {
    initial: {
      y: -1000
    },
    animate: {
      y: 0,
      transition: {
        type: 'string',
        stiffness: 90,
        bounce: 150,
        duration: .3
      }
    },
    exit: {
      y: -1000,
      transition: {
        type: 'string',
        stiffness: 90,
        bounce: 150,
        duration: .1
      }
    }
  }

  return (
    <div>
      <ThemeContext.Provider value={{ isNightMode, setNightMode, isMobileMenuOpen, setMobileMenuOpen }}>
        <Navbar />
        <Main />
        <AnimatePresence>
          {isMobileMenuOpen &&
            <motion.div variants={mobileMenuContainer} initial="initial" animate="animate" exit="exit" className="mobile-menu d-lg-none d-flex flex-column px-5 gap-5 pt-5">
              <motion.div variants={titleAndBack} initial="initial" animate="animate" exit="exit" className='d-flex align-items-center justify-content-between'>
                <img className='portfolio-logo w-50' src="/images/Logo.png" alt="Adrian Marcelo portfolio logo" loading='lazy' />
                <div onClick={() => setMobileMenuOpen(false)}>
                  <FaArrowRight style={{ width: '3rem', height: '3rem' }} className='text-white' />
                </div>
              </motion.div>
              <motion.span variants={mobileMenu} className='display-3 text-contrastColor'>About</motion.span>
              <motion.span variants={mobileMenu} className='display-3 text-contrastColor'>Skills</motion.span>
              <motion.span variants={mobileMenu} className='display-3 text-contrastColor'>Certificates</motion.span>
              <motion.span variants={mobileMenu} className='display-3 text-contrastColor'>Projects</motion.span>
              <motion.div variants={mobileMenu} tabIndex="0" role="button" onClick={() => {
                setNightMode(!isNightMode);
                setMobileMenuOpen(false);
              }}>
                {isNightMode ? <FaSun style={{ width: '3rem', height: '3rem' }} className='text-white' /> : <FaMoon style={{ width: '3rem', height: '3rem' }} className='text-white' />}
              </motion.div>

              <div className="backdrop"></div>
            </motion.div>}
        </AnimatePresence>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
