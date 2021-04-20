import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.title} | ${siteTitle}`} />

        <div className="single-post-section">
        <div className="spacing is-lg" />
          <div className="container">
              <div className="post">
                  <h1 className="title">{post.title}</h1>
                  <div className="post-meta">
                      <span>By<strong>{post.author.name}</strong></span>
                      <span>Published in <strong>{post.category.name}</strong></span>
                      <span>{post.publishDate}</span>
                  </div>
                  <div className="spacing is-lg" />
                  <div className="row">
                      <div className="col-8">
                          <div className="post-body">
                              <div className="thumbnail">
                                  <Img
                                      alt={post.title}
                                      fluid={post.heroImage.fluid}
                                  />
                              </div>
                              <div
                                  className="content"
                                  dangerouslySetInnerHTML={{
                                      __html: post.body.childMarkdownRemark.html,
                                  }}
                              />
                          </div>
                      </div>
                  </div>

              </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      category {
        name
      }
      author {
        name
      }
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`


