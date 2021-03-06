const Promise = require('bluebird')
const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve('./src/templates/blog-post.js')
        const category = path.resolve('./src/templates/category.js')
        const blogPage = path.resolve('./src/templates/blog.js')

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
                    blog_post {
                      slug
                      title
                    }
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

                const posts = result.data.allContentfulBlogPost.edges;

                paginate({
                    createPage,
                    items: posts,
                    itemsPerPage: 8,
                    pathPrefix: '/blog',
                    component: blogPage
                })

                posts.forEach(post => {
                    createPage({
                        path: `/blog/${post.node.slug}/`,
                        component: blogPost,
                        context: {
                            slug: post.node.slug,
                        },
                    })
                })

                result.data.allContentfulCategory.edges.forEach(cat => {

                    if (!cat.node.blog_post) return;

                    paginate({
                        createPage,
                        items: cat.node.blog_post,
                        itemsPerPage: 8,
                        pathPrefix: `/category/${cat.node.slug}`,
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