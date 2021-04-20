import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedCarousel from "../components/featured-carousel";
import Posts from "../components/posts";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FeaturedCarousel/>
    <Posts />
  </Layout>
)

export default IndexPage
