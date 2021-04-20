import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedCarousel from "../components/featured-carousel";
import Posts from "../components/posts";
import { get } from "lodash";

const IndexPage = (props) => {
    console.log(props);

    const posts = get(props, "data.allContentfulBlogPost.edges")

    return (
        <Layout>
            <SEO title="Home" />
            <FeaturedCarousel data={posts} />
            <Posts />
            <div className="spacing is-lg" />
            <Posts />
            <div className="spacing is-lg" />
            <Posts />
        </Layout>
    )
}

export default IndexPage


export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC } limit:6) {
      edges {
        node {
          title
          category
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
            author {
              name
              image {
                fluid(maxWidth: 45, maxHeight: 45, resizingBehavior: SCALE) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
        }
      }
    }
  }
`

