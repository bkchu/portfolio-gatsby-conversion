import React, { Fragment } from "react"
import Techs from "../../Projects/Techs/Techs"

import ModalWrapper from "../ModalWrapper"

const ProjectModal = props => {
  const {
    title,
    description,
    img,
    credentials,
    technologies,
    url,
    year,
    color,
  } = props.currentModal.modalMeta

  const displayCredentials = () => {
    return (
      credentials && (
        <div className="Credential">
          <h3 className="Credential__header">Demo Credentials</h3>
          {credentials.map(({ role, email, password }) => (
            <Fragment key={role}>
              <h5 className="Credential__role">{role}</h5>
              <h6 className="Credential__email">Email: {email}</h6>
              <h6 className="Credential__password">Password: {password}</h6>
            </Fragment>
          ))}
        </div>
      )
    )
  }

  return (
    <ModalWrapper {...props} title={title} width={400} showOk={false}>
      <div key={title} className="ProjectModal">
        <div
          style={{ background: color }}
          className="ProjectModal__img-container"
        >
          <img className="ProjectModal__img" src={img} alt={title} />
        </div>
        <h1 className="ProjectModal__title">{title}</h1>
        <p className="ProjectModal__year">{year}</p>
        <a
          className="ProjectModal__link link"
          target="_blank"
          rel="noopener noreferrer"
          href={url}
        >
          {url}
        </a>
        {displayCredentials()}
        <p className="ProjectModal__description">{description}</p>
        <Techs techs={technologies} />
      </div>
    </ModalWrapper>
  )
}

export default ProjectModal
