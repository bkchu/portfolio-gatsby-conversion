import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Main from "../components/Main/Main"
import Experience from "../components/Experience/Experience"

const IndexPage = () => (
  <Main>
    <SEO title="Experience" />
    <Experience />
  </Main>
)

export default IndexPage
