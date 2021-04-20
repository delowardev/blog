import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedCarousel from "../components/featured-carousel";
import Posts from "../components/posts";
import { get } from "lodash";

const IndexPage = (props) => {

    const featured = get(props, "data.allContentfulBlogPost.edges")
    const posts = get(props, "data.allContentfulBlogPost.group")

    return (
        <Layout>
            <SEO title="Home" />
            <FeaturedCarousel data={featured} />
            {
                posts.map((p, key) => (
                    <Posts data={p} key={key} isFirst={key === 0} />
                ))
            }
        </Layout>
    )
}

export default IndexPage


export const pageQuery = graphql`
query HomeQuery {
  allContentfulBlogPost(sort: {fields: [publishDate], order: DESC}, limit: 16) {
    edges {
      node {
        title
        category {
          name
          slug
          color
          textColor
        }
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
    group(field: category___slug, limit:3) {
      edges {
        node {
          category {
            color
            textColor
            id
            name
            slug
          }
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
            author {
              name
            }
        }
      }
    }
  }
}
`

