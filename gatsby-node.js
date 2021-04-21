const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve('./src/templates/blog-post.js')
        const category = path.resolve('./src/templates/category.js')
        resolve(
            graphql(
                `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulCategory {
                edges {
                  node {
                    slug
                    name
                  }
                }
            }
          }
        `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                result.data.allContentfulBlogPost.edges.forEach(post => {
                    createPage({
                        path: `/blog/${post.node.slug}/`,
                        component: blogPost,
                        context: {
                            slug: post.node.slug,
                        },
                    })
                })

                result.data.allContentfulCategory.edges.forEach(cat => {
                    createPage({
                        path: `/category/${cat.node.slug}/`,
                        component: category,
                        context: {
                            slug: cat.node.slug,
                        },
                    })
                })

            })
        )
    })
}