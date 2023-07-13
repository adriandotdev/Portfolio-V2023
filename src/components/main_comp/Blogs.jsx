import { useContext } from 'react'
import { motion } from 'framer-motion';
import { ThemeContext } from '../../App';

function Blogs() {

    const { isNightMode } = useContext(ThemeContext);

    const containerAnimation = {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const titleAnimation = {

        initial: {
            y: 150, opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                duration: .5,
            }
        }
    }

    const certificatesAnimation = {

        initial: {
            scale: 0
        },
        whileInView: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                duration: .5,
            }
        }
    }

    return (
        <motion.div variants={containerAnimation} initial="initial" whileInView="whileInView" id="scrollspyCertificates" className="container my-5 pt-5">
            <motion.div variants={containerAnimation}>
                <motion.h1 variants={titleAnimation} className={`display-5 text-center mt-5 fw-bold ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Blogs</motion.h1>

                <motion.p variants={titleAnimation} className={`section--heading__divider mt-0 text-center ${isNightMode ? "text-contrastColor divider__darkmode" : "text-dark divider__daymode"}`}>N</motion.p>
                <hr className={`${isNightMode ? "border-darkModeAccentColor" : ""}`} />
            </motion.div>

            <motion.div variants={certificatesAnimation} className="row justify-content-center">
                <iframe width="560" height="315" src="https://adriannads.hashnode.dev/understanding-javascript-function-fundamentals" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </motion.div>
        </motion.div>
    )
}

export default Blogs