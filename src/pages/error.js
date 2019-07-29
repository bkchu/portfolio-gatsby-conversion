import React from "react"
import SEO from "../components/seo"
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <div className="FourOhFour">
    <SEO title="Error" />
    <h1 className="FourOhFour__header">Oops!</h1>
    <p className="FourOhFour__subheader">Something went wrong... the sadness.</p>
    <Link className="FourOhFour__link" to='/'>Back Home</Link>
  </div>
)

export default NotFoundPage
