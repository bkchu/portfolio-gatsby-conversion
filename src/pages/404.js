import React from "react"
import SEO from "../components/seo"
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <div className="FourOhFour">
    <SEO title="404" />
    <h1 className="FourOhFour__header">404</h1>
    <p className="FourOhFour__subheader">You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link className="FourOhFour__link" to='/'>Back Home</Link>
  </div>
)

export default NotFoundPage
