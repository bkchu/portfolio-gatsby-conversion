import { window } from "browser-monads"
import { motion } from "framer-motion"
import React, { Fragment, useEffect } from "react"
import Footer from "../Footer/Footer"

function Page(props) {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  })

  const { children } = props

  const pageVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.75,
        y: { type: "spring", stiffness: 20 },
      },
    },
    exiting: {
      y: 50,
      opacity: 0,
      transition: {
        delay: 1,
        y: { stiffness: 1000 },
      },
    },
  }

  const loadingBarStates = {
    right: [100, 70, 0, 0, 0].map(val => `${val * 0.01 * window.innerWidth}px`),
    opacity: [0, 1, 1, 1, 0],
  }

  return (
    <Fragment>
      <motion.div
        animate={loadingBarStates}
        transition={{
          duration: 1.05,
          times: [0, 0.4, 0.5, 0.8, 1],
        }}
        className="Page__load-indicator"
      />
      <div className="Page">
        <motion.div
          key={children}
          initial="hidden"
          animate="visible"
          variants={pageVariants}
          className="container"
        >
          {children}
        </motion.div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Page
