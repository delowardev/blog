import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedCarousel from "../components/featured-carousel";
import Posts from "../components/posts";
import { get } from "lodash";

const IndexPage = (props) => {

    const featured = get(props, "data.allContentfulBlogPost.edges")
    const categories = get(props, "data.allContentfulCategory.edges")

    return (
        <Layout>
            <SEO title="Home" />
            <FeaturedCarousel data={featured} />
            {
                categories.map((p, key) => {
                    if (p.node.blog_post) {
                        return <Posts data={p} key={key} max={4} />
                    }
                    return null;
                })
            }
        </Layout>
    )
}

export default IndexPage

// @TODO: filter category items properly
export const pageQuery = graphql`
query HomeQuery {
  allContentfulBlogPost(sort: {fields: [publishDate], order: DESC}, limit: 6) {
    edges {
      node {
        title
        category {
          name
          slug
          color
          textColor
            image {
                file {
                    url
                }
            }
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
  }
  allContentfulCategory(limit: 10) {
    edges {
      node {
        slug
        name
        blog_post {
          title
            category {
              name
              slug
              color
              textColor
                image {
                    file {
                        url
                    }
                }
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
                  fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                    ...GatsbyContentfulFluid_tracedSVG
                  }
                }
            }
        }
      }
    }
  }
}
`

