import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedCarousel from "../components/featured-carousel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FeaturedCarousel/>
  </Layout>
)

export default IndexPage
