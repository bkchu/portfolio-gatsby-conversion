import React from "react"
import { connect } from "react-redux"
import * as actions from "../../redux/ducks/reducer"
import ProjectModal from "./ModalContent/ProjectModal"

const ModalConductor = props => {
  switch (props.currentModal.modalType) {
    case "PROJECT_MODAL":
      return <ProjectModal {...props} />
    default:
      return null
  }
}

export default connect(
  state => state,
  { ...actions }
)(ModalConductor)
