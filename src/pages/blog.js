import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
// import PostCard from "./post-card";
import { get } from "lodash";
import PostCard from "../components/post-card";

const BlogPage = (props) => {

    const posts = get(props, "data.allContentfulBlogPost.edges");

    console.log(posts)

    return (
        <Layout>
            <SEO title="Let's connect" />
            <div className="spacing is-lg"/>

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="page-header">
                            <h1>Latest posts</h1>
                            <p>Were they a kind of writing, an expository method of display and measurement or a mutable material.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spacing is-lg"/>

            <div className="posts">
                <div className="container">
                    <div className="row">
                        {
                            posts?.map((p, k) => (
                                <PostCard className="col-6 post-item" key={k} data={p.node} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default BlogPage


export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
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
                    file {
                        url
                    }
                }
            }
          }
        }
    }
  }
`