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

    let i = 0;

    return (
        <Layout>
            <SEO title="Home" />
            <FeaturedCarousel data={featured} />
            {
                categories.map((p, key) => {
                    if (p.node.blog_post && i < 5) {
                        i++;
                        return <Posts data={p} key={key} isFirst={i === 1} />
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
  allContentfulBlogPost(sort: {fields: [publishDate], order: DESC}, limit: 16) {
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
              fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
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

