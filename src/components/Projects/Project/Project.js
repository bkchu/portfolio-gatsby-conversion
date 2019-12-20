import React from "react"
import { connect } from "react-redux"
import { projectModal } from "../../../redux/ducks/reducer"
import { motion } from "framer-motion"

const Project = props => {
  const { title, img, color } = props.project

  const projectVariants = {
    opened: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: "spring", stiffness: 50 },
        scale: { type: "spring", stiffness: 50 },
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      scale: 0.95,
    },
  }

  return (
    <motion.div variants={projectVariants} key={title} className="Project">
      <button
        onClick={() => props.projectModal(props.project)}
        style={{ background: color }}
        className="Project__img-container"
      >
        <img className="Project__img" src={img} alt={title} />
        <h1 className="Project__title">{title}</h1>
      </button>
    </motion.div>
  )
}

export default connect(
  state => state,
  { projectModal }
)(Project)
