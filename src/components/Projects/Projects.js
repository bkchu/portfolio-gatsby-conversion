import React from "react"
import { motion } from "framer-motion"
import Page from "../Page/Page"
import Project from "./Project/Project"

import projects from "./project_util"

const Projects = () => {
  const projectsVariants = {
    opened: {
      transition: { staggerChildren: 0.07, delayChildren: 1 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const projectDisplay = projects.map((project, i) => (
    <Project key={project.title} project={project} />
  ))

  return (
    <Page title="Projects">
      <motion.div
        initial="closed"
        animate="opened"
        variants={projectsVariants}
        className="Projects"
      >
        {projectDisplay}
      </motion.div>
    </Page>
  )
}

export default Projects
