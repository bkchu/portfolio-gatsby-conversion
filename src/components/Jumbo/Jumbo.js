import React from "react"
import { motion } from "framer-motion"
import Page from "../Page/Page"

const Jumbo = () => {
  const variants = {
    hiddenJumbo: {
      x: -20,
      opacity: 0,
    },
    visibleJumbo: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        delay: 1,
      },
    },
  }
  return (
    <Page>
      <div className="Jumbo">
        <motion.h1
          initial="hiddenJumbo"
          animate="visibleJumbo"
          variants={variants}
          className="Jumbo__description"
        >
          <span className="Jumbo__name">Brandon Chung - </span>
          UI Developer venturing to create pixel-perfect, accessible
          experiences.
        </motion.h1>
      </div>
    </Page>
  )
}

export default Jumbo
