import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact";

const ContactPage = () => (
    <Layout>
        <SEO title="Let's connect" />
        <div className="spacing is-lg"/>
        <Contact />
    </Layout>
)

export default ContactPage
