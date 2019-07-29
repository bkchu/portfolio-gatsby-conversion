import React from "react"
import SEO from "../components/seo"
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <div className="FourOhFour">
    <SEO title="Thanks" />
    <h1 className="FourOhFour__header">Thanks!</h1>
    <p className="FourOhFour__subheader">Don't worry, I just got notified about your message. I'll get to it as soon as I can.</p>
    <Link className="FourOhFour__link" to='/'>Back Home</Link>
  </div>
)

export default NotFoundPage
