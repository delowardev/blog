import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <div className="container">
        <SEO title="404: Not found" />
        <div className="error-404">
            <div className="spacing is-lg" />
            <h1>Sorry, this page isn't available.</h1>
            <p>You may have mistyped the address or the page may have moved.</p>
            <Link className="btn is-primary" to={'/'}>Go to home</Link>
            <div className="spacing is-lg" />
        </div>
    </div>
  </Layout>
)

export default NotFoundPage
