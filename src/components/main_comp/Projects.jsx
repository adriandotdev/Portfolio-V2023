/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react'
import { Row, Col } from 'react-bootstrap';

// User Defined Components
import ProjectTechnology from '../sub_comp/ProjectTechnology';
import '../../css/main.css';
import { ThemeContext } from '../../App';
import { motion } from 'framer-motion';

function Projects() {

  const { isNightMode } = useContext(ThemeContext);

  const containerAnimation = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: {
      once: true
    }
  }

  const fromBottomAnimation = {

    initial: {
      y: 150, opacity: 0
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        duration: .1,
      }
    },
    viewport: {
      once: true
    }
  }

  const image = {

    initial: {
      scale: 0
    },
    whileInView: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: .2,
      }
    },
    viewport: {
      once: true
    }
  }

  const fromRightAnimation = {
    initial: {
      x: 150, opacity: 0
    },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        duration: .1,
      }
    },
    viewport: {
      once: true
    }
  }

  const fromLeftAnimation = {
    initial: {
      x: -150, opacity: 0
    },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        duration: .1,
      }
    },
    viewport: {
      once: true
    }
  }

  const techContainer = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: {
      once: true
    }
  }

  const ctaContainer = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: {
      once: true
    }
  }
  return (
    <motion.div variants={containerAnimation} initial="initial" whileInView="whileInView" viewport="viewport" id="scrollspyProjects" className="projects container my-8 pt-5">
      <motion.div variants={containerAnimation} viewport="viewport">
        <motion.h1 variants={fromBottomAnimation} viewport="viewport" className={`display-5 text-center mt-5 fw-bold ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>Projects</motion.h1>
        <motion.p variants={fromBottomAnimation} viewport="viewport" className={`section--heading__divider mt-0 text-center ${isNightMode ? "text-contrastColor divider__darkmode" : "text-dark divider__daymode"}`}>N</motion.p>
        <motion.hr className={`${isNightMode ? "border-darkModeAccentColor" : ""}`} />
      </motion.div>

      <motion.div variants={containerAnimation} viewport="viewport">

        {/* Kayamanan: THPT Project */}
        <motion.div variants={containerAnimation} viewport="viewport" className={`row p-md-3 mb-5 ${isNightMode ? "" : ""}`}>

          <Col className="col-12 col-lg-6 mb-3 w-100">
            <Row className="row">
              <Col className="col-12 col-lg-6 img--project-container">
                <div className="img-fluid">
                  <motion.img variants={image} viewport="viewport"
                    src="/images/projects/Kayamanan.png"
                    alt="Kayamanan: The Hunt for Philippine Treasures main menu interface"
                    className="img-fluid shadow"
                    loading='lazy'
                  />
                  <motion.img variants={image} viewport="viewport"
                    src="/images/gifs/Quest 1.gif"
                    alt="Kayamanan: The Hunt for Philippine Treasures sample output"
                    style={{ width: '100%' }}
                    loading='lazy'
                  />
                </div>
              </Col>
              <Col className="col-12 col-lg-6">
                <motion.h1 variants={fromRightAnimation} viewport="viewport" className={`my-2 text-lg-end font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>
                  Kayamanan: The Hunt for Philippine Treasures
                </motion.h1>
                <motion.p variants={fromRightAnimation} viewport="viewport" className={`text-lg-end font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                  Our thesis software fulfills the requirements for the BS Computer Science degree. It is a 2D Android role-playing game that teaches Philippine Culture and History. I was assigned to implement the overall functionalities of the software. During development, I learned how to use object-oriented design patterns such as Observer and Singleton.
                </motion.p>

                <div className="mb-3">
                  <motion.div variants={techContainer} viewport="viewport" className="mx-1 row justify-content-lg-end gap-3">

                    <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C Sharp programming language" />
                    </motion.div>

                    <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity Game Engine Logo" />
                    </motion.div>

                    <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android logo" />
                    </motion.div>

                  </motion.div>
                </div>

                {/* Buttons */}
                <div>
                  <motion.div variants={ctaContainer} viewport="viewport" className="d-lg-flex justify-content-lg-end gap-2">

                    <motion.a variants={fromBottomAnimation} viewport="viewport" role="button" target="blank" className={`btn mx-1 ${isNightMode ? "btn-darkModeAccentColor btn--resume__darkmode" : "btn-darkSecondary btn--resume__daymode"}`} href="https://github.com/adriandotdev/Kayamanan-A-Hunt-for-Philippine-Treasures-THESIS-"
                    >View Source Code</motion.a
                    >

                    <motion.a variants={fromBottomAnimation} viewport="viewport" target="blank" className={`btn ${isNightMode ? "btn-outline-contrastColor" : "btn-outline-bodyTextColor"}`} href="https://drive.google.com/file/d/1lxKxh3pmjxMk9wxz70cI5to6__ZQK4_k/view?usp=sharing" role="button"
                    >APK File</motion.a
                    >
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

        {/* Food Hub Ordering System Project */}
        <motion.div variants={containerAnimation} viewport="viewport" className={`p-md-3 mb-5 ${isNightMode ? "" : ""}`}>
          <Col className="col-12 col-lg-6 ms-auto mb-3 p-3 w-100">
            <Row className="flex-lg-row-reverse">
              <Col className="col-12 col-lg-6 img--project-container">
                <div className="img-fluid">
                  <motion.img variants={image}
                    src="/images/projects/Food Hub.png"
                    alt="Food Hub Ordering System sample user interface"
                    className="img-fluid shadow"
                    loading='lazy'
                  />
                  <motion.img variants={image}
                    src="/images/gifs/Cart.gif"
                    alt="Food Hub Ordering System sample output"
                    style={{ width: '100%' }}
                    loading='lazy'
                  />
                </div>
              </Col>

              <Col className="col-12 col-lg-6">
                <motion.h1 variants={fromLeftAnimation} className={`my-2 text-lg-start font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>
                  Food Hub Ordering System
                </motion.h1>
                <motion.p variants={fromLeftAnimation} className={`text-lg-start font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                  Our project was focused on System Analysis and Design, as well as Software Engineering. We developed an ordering system for small food businesses, utilizing Responsive Web Design with TailwindCSS, and DaisyUI for pre-made components. We also used React.js for component-based UI and Node.js and Express.js for the backend. Through this project, I learned about state management through ContextAPI, as well as the MVC pattern, with SQL as the Model, React.js as the View, and Express and Node.js as the Controller
                </motion.p>
                <motion.div variants={ctaContainer} className="mb-3">
                  <Row className="justify-content-start gap-2 mx-1">
                    <motion.div variants={fromBottomAnimation} className="col col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react.js logo" />
                    </motion.div>

                    <motion.div variants={fromBottomAnimation} className="col col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL logo" />
                    </motion.div>

                    <motion.div variants={fromBottomAnimation} className="col col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js logo" />
                    </motion.div>

                    <motion.div variants={fromBottomAnimation} className="col col-1 m-0 p-0">
                      <ProjectTechnology src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' alt="Node.js Logo" />
                    </motion.div>

                    <motion.div variants={fromBottomAnimation} className="col col-1 m-0 p-0">

                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS CSS Framework Logo" />
                    </motion.div>
                  </Row>
                </motion.div>
                <motion.div variants={fromBottomAnimation}>
                  <a target="blank" className={`btn mx-1 ${isNightMode ? "btn-darkModeAccentColor btn--resume__darkmode" : "btn-darkSecondary btn--resume__daymode"}`} href="https://github.com/adriandotdev/Food-Hub-Software-Engineering-" role="button"
                  >View Source Code</a
                  >
                </motion.div>
              </Col>
            </Row>
          </Col>
        </motion.div>

        {/* Flashcard Project */}
        <motion.div variants={containerAnimation} viewport="viewport" className={`row p-md-3 mt-5 ${isNightMode ? "" : ""}`}>

          <Col className="col-12 col-lg-6 mb-3 w-100">
            <Row className="row">
              <Col className="col-12 col-lg-6 img--project-container">
                <div className="img-fluid">
                  <motion.img
                    variants={image}
                    viewport="viewport"
                    src="/images/projects/Flashcard.png"
                    alt="Flashcard sample user interface"
                    className="img-fluid shadow"
                    loading='lazy'
                  />

                  <motion.img
                    variants={image}
                    viewport="viewport"
                    src="/images/gifs/flashcard.gif"
                    alt="Flashcard sample ouput."
                    style={{ width: '100%' }}
                    loading='lazy'
                  />
                </div>
              </Col>
              <Col className="col-12 col-lg-6">
                <motion.h1 variants={fromRightAnimation} viewport="viewport" className={`my-2 text-lg-end font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>
                  Flashcards
                </motion.h1>
                <motion.p variants={fromRightAnimation} viewport="viewport" className={`text-lg-end font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                  This is a simple C.R.U.D app that allows the user to create a set of questions based on their chosen category. Through this project, I learned how to use the 'useReducer' hook to handle complex states.
                </motion.p>

                <div className="mb-3">
                  <motion.div variants={techContainer} viewport="viewport" className="mx-1 row justify-content-lg-end gap-3">
                    <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" />
                    </motion.div>

                    <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Buttons */}
                <div>
                  <motion.div variants={ctaContainer} viewport="viewport" className="d-lg-flex justify-content-lg-end gap-2">

                    <motion.a variants={fromBottomAnimation} viewport="viewport" role="button" target="blank" className={`btn mx-1 ${isNightMode ? "btn-darkModeAccentColor btn--resume__darkmode" : "btn-darkSecondary btn--resume__daymode"}`} href="https://github.com/adriandotdev/flashcard-vite"
                    >View Source Code</motion.a
                    >

                    <motion.a variants={fromBottomAnimation} viewport="viewport" target="blank" className={`btn ${isNightMode ? "btn-outline-contrastColor" : "btn-outline-bodyTextColor"}`} href="https://flashcards-go.netlify.app/" role="button"
                    >Live Site</motion.a
                    >
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

        {/* Recipe Search App */}
        <motion.div variants={containerAnimation} viewport="viewport" className={`row p-md-3 mt-5 ${isNightMode ? "" : ""}`}>

          <Col className="col-12 col-lg-6 mb-3 w-100">
            <Row className="flex-lg-row-reverse">
              <Col className="col-12 col-lg-6 img--project-container">
                <div className="img-fluid">
                  <motion.img
                    variants={image}
                    viewport="viewport"
                    src="/images/projects/Recipe_Search_App.png"
                    alt="Recipe Search App sample user interface"
                    className="img-fluid shadow"
                    loading='lazy'
                  />

                  <motion.img
                    variants={image}
                    viewport="viewport"
                    src="/images/gifs/recipe.gif"
                    alt="Recipe Search App sample output"
                    style={{ width: '100%' }}
                    loading='lazy'
                  />
                </div>
              </Col>
              <Col className="col-12 col-lg-6">
                <motion.h1 variants={fromRightAnimation} viewport="viewport" className={`my-2 text-lg-start font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>
                  Recipe Search App using API
                </motion.h1>
                <motion.p variants={fromRightAnimation} viewport="viewport" className={`text-lg-start font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                  A recipe app that allows user to search for their desire food, and get its recipes. Utilized Edamam API to get the list of recipes.
                </motion.p>

                <div className="mb-3">
                  <motion.div variants={techContainer} viewport="viewport" className="mx-1 row justify-content-lg-start gap-3">
                    <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" />
                    </motion.div>

                    <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Buttons */}
                <div>
                  <motion.div variants={ctaContainer} viewport="viewport" className="d-lg-flex justify-content-lg-start gap-2">

                    <motion.a variants={fromBottomAnimation} viewport="viewport" role="button" target="blank" className={`btn mx-1 ${isNightMode ? "btn-darkModeAccentColor btn--resume__darkmode" : "btn-darkSecondary btn--resume__daymode"}`} href="https://github.com/adriandotdev/Search-Recipe-App"
                    >View Source Code</motion.a
                    >

                    <motion.a variants={fromBottomAnimation} viewport="viewport" target="blank" className={`btn ${isNightMode ? "btn-outline-contrastColor" : "btn-outline-bodyTextColor"}`} href="https://adrian-recipe-app.vercel.app/" role="button"
                    >Live Site</motion.a
                    >
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>

        {/* YGO Programming Center */}
        <motion.div variants={containerAnimation} viewport="viewport" className={`row p-md-3 mt-5 ${isNightMode ? "" : ""}`}>

          <Col className="col-12 col-lg-6 mb-3 w-100">
            <Row className="row">
              <Col className="col-12 col-lg-6 img--project-container">
                <div className="img-fluid">
                  <motion.img
                    variants={image}
                    viewport="viewport"
                    src="/images/projects/YGO.png"
                    alt="YGO Programming Center sample user interface"
                    className="img-fluid shadow"
                    loading='lazy'
                  />

                  <motion.img
                    variants={image}
                    viewport="viewport"
                    src="/images/gifs/Enrolling Courses.gif"
                    alt="YGO Programming Center sample output"
                    style={{ width: '100%' }}
                    loading='lazy'
                  />
                </div>
              </Col>
              <Col className="col-12 col-lg-6">
                <motion.h1 variants={fromRightAnimation} viewport="viewport" className={`my-2 text-lg-start font-montserrat-medium ${isNightMode ? "text-darkModeAccentColor" : "text-dark"}`}>
                  YGO Programming Center
                </motion.h1>
                <motion.p variants={fromRightAnimation} viewport="viewport" className={`text-lg-start font-montserrat ${isNightMode ? "text-contrastColor" : "text-bodyTextColor"}`}>
                  A desktop application for course enrollment system. This is our programming 2 project. Utilized Java Swing for creating Graphical User Interface. I learned here how different UI components works such as ComboBox, RadioButtons, Checkboxes, Alerts, Lists and Tables.
                </motion.p>

                <div className="mb-3">
                  <motion.div variants={techContainer} viewport="viewport" className="mx-1 row justify-content-lg-start gap-3">
                    <motion.div variants={fromBottomAnimation} viewport="viewport" className="col-1 m-0 p-0">
                      <ProjectTechnology src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Buttons */}
                <div>
                  <motion.div variants={ctaContainer} viewport="viewport" className="d-lg-flex justify-content-lg-start gap-2">

                    <motion.a variants={fromBottomAnimation} viewport="viewport" role="button" target="blank" className={`btn mx-1 ${isNightMode ? "btn-darkModeAccentColor btn--resume__darkmode" : "btn-darkSecondary btn--resume__daymode"}`} href="https://github.com/adriandotdev/academic-courseworks/tree/ygo-programming-center-gui"
                    >View Source Code</motion.a
                    >
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Col>
        </motion.div>
      </motion.div>


      {isNightMode && <div>
        <div className="projects-bg-night"></div>
        <div className="projects-bg-night2"></div>
      </div>}

      {!isNightMode && <div>
        <div className="projects-bg-light"></div>
      </div>}
    </motion.div>
  )
}

export default Projects