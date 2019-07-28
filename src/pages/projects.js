import React from "react"

import SEO from "../components/seo"
import Main from "../components/Main/Main"
import Projects from "../components/Projects/Projects"

const IndexPage = () => (
  <Main>
    <SEO title="Projects" />
    <Projects />
  </Main>
)

export default IndexPage
