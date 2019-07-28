import React from "react"
import { connect } from "react-redux"
import { projectModal } from "../../../redux/ducks/reducer"

const Project = props => {
  const {
    title,
    img,
    color,
  } = props.project

  return (
    <div key={title} className="Project">
      <div
        onClick={() => props.projectModal(props.project)}
        style={{ background: color }}
        className="Project__img-container"
      >
        <img className="Project__img" src={img} alt={title} />
        <h1 className="Project__title">{title}</h1>
      </div>
    </div>
  )
}

export default connect(
  state => state,
  { projectModal }
)(Project)
