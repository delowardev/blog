import React from 'react'
import {graphql} from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import PostCard from "../components/post-card";


class BlogPostTemplate extends React.Component {
    render() {
        const posts = get(this.props, 'data.allContentfulBlogPost.edges')

        const title = get(posts[0], "node.category.name")

        console.log(posts)

        return (
            <Layout location={this.props.location}>
                <Helmet title={`${title}`} />

                <div className="spacing is-lg"/>

                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="page-header">
                                <h1>{title}</h1>
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
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByCat($slug: String!) {
      allContentfulBlogPost(filter: {category: {slug: {eq: $slug}}}) {
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
        pageInfo {
          currentPage
          hasNextPage
          hasPreviousPage
          itemCount
          pageCount
          perPage
          totalCount
        }
      }
  }
`