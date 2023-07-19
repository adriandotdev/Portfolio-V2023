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

export { containerAnimation, fromBottomAnimation, image, fromRightAnimation, fromLeftAnimation, techContainer, ctaContainer }

