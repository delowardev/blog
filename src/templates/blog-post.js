import React from 'react'
import {graphql, Link} from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { Facebook, Twitter, GitHub } from "react-feather"
import pattern from "../images/pattern.png";


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
                      <span>By <strong>{post.author.name}</strong></span>
                      <span>Published in <strong>{post.category.name}</strong></span>
                      <span>{post.publishDate}</span>
                  </div>
                  <div className="spacing is-lg" />
                  <div className="row ">
                      <div className="col-12 col-lg">
                          <div className="post-left">
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
                      <div className="col-auto">
                          <div className="author-box">
                              <div className="avatar">
                                  <span className="pattern" style={{ backgroundImage: `url('${pattern}')`}} />
                                  <Img
                                      alt={post.author.name}
                                      fluid={post.author.image.fluid}
                                  />
                              </div>
                              <h4> { post.author.name } </h4>
                              <h5> { post.author.title } </h5>
                              <div className="social">
                                  <Link className="facebook" target="_blank" to={`https://fb.com/${post.author.facebook}`}>
                                      <Facebook />
                                  </Link>
                                  <Link className="twitter" target="_blank" to={`https://fb.com/${post.author.twitter}`}>
                                      <Twitter />
                                  </Link>
                                  <Link className="github" target="_blank" to={`https://fb.com/${post.author.github}`}>
                                      <GitHub />
                                  </Link>
                              </div>
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
          title
          facebook
          twitter
          github
          image {
            fluid(maxWidth: 150, maxHeight: 150, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
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


