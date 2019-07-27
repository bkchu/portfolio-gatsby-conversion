import React from "react"
// import { Link } from "gatsby"

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
