import React from "react"
import Page from "../Page/Page"
import Project from "./Project/Project"

import projects from "./project_util"

const Projects = () => {
  const projectDisplay = projects.map(project => (
    <Project key={project.title} project={project} />
  ))
  return (
    <Page title="Projects">
      <div className="Projects">{projectDisplay}</div>
    </Page>
  )
}

export default Projects
