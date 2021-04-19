import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";
import FeaturedCarousel from "../components/featured-carousel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <FeaturedCarousel/>
  </Layout>
)

export default IndexPage
