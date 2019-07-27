import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Main from "../components/Main/Main"
import Jumbo from "../components/Jumbo/Jumbo"

const IndexPage = () => (
  <Main>
    <SEO title="Home" />
    <Jumbo />
  </Main>
)

export default IndexPage
