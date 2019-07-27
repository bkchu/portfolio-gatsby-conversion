import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Main from "../components/Main/Main"
import Skills from "../components/Skills/Skills"

const IndexPage = () => (
  <Main>
    <SEO title="Skills" />
    <Skills />
  </Main>
)

export default IndexPage
