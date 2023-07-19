/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../../App';
import { motion } from 'framer-motion';
import ProjectTechnology from './ProjectTechnology';

import {
    containerAnimation,
    fromBottomAnimation,
    image,
    fromRightAnimation,
    techContainer,
    ctaContainer
} from '../../motions/projects';

function Project({ title, description, img, gif, technologies, links, isReversed }) {

    const { isNightMode } = useContext(ThemeContext);
    const IMG_PATH = "/images/projects";
    const GIF_PATH = "/images/gifs";

    return (
        <motion.div variants={containerAnimation} viewport="viewport" className={`row p-md-3 mb-5 ${isNightMode ? "" : ""}`}>

            <Col className="col-12 col-lg-6 mb-3 w-100">
                <Row className={isReversed ? "flex-lg-row-reverse" : "row"}>
                    <Col className="col-12 col-lg-6 img--project-container">
                        <div className="img-fluid">
                            <motion.img variants={image} viewport="viewport"
                                src={IMG_PATH + img.src}
                                alt={img.alt}
                                className="img-fluid shadow"
                                loading='lazy'
                            />
                            <motion.img variants={image} viewport="viewport"
                                src={GIF_PATH + gif.src}
                                alt={gif.alt}
                                style={{ width: '100%' }}
                                loading='lazy'
                            />
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-6">
                        <motion.h1 variants={fromRightAnimation} viewport="viewport" className={`my-2 text-lg-start font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>
                            {title}
                        </motion.h1>
                        <motion.p variants={fromRightAnimation} viewport="viewport" className={`text-lg-start font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                            {description}
                        </motion.p>

                        <div className="mb-3">
                            <motion.div variants={techContainer} viewport="viewport" className="mx-1 row justify-content-lg-start gap-3">

                                {
                                    technologies.map(technology => (

                                        <motion.div key={technology.src} variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                                            <ProjectTechnology src={technology.src} alt={technology.alt} />
                                        </motion.div>
                                    ))
                                }
                                {/* <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                                    <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C Sharp programming language" />
                                </motion.div>

                                <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                                    <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity Game Engine Logo" />
                                </motion.div>

                                <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                                    <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android logo" />
                                </motion.div> */}

                            </motion.div>
                        </div>

                        {/* Buttons */}
                        <div>
                            <motion.div variants={ctaContainer} viewport="viewport" className="d-lg-flex justify-content-lg-start gap-2">

                                <motion.a variants={fromBottomAnimation} viewport="viewport" role="button" target="blank" className={`btn mx-1 ${isNightMode ? "btn-darkModeAccentColor btn--resume__darkmode" : "btn-darkSecondary btn--resume__daymode"}`} href={links.sourceCode}
                                >View Source Code</motion.a
                                >


                                {links.site & <motion.a variants={fromBottomAnimation} viewport="viewport" target="blank" className={`btn ${isNightMode ? "btn-outline-contrastColor" : "btn-outline-bodyTextColor"}`} href="https://drive.google.com/file/d/1lxKxh3pmjxMk9wxz70cI5to6__ZQK4_k/view?usp=sharing" role="button"
                                >APK File</motion.a>}
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </motion.div>
    )
}

export default Project