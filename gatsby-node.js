const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const workTemplate = path.resolve(`./src/templates/work-template.js`)
    const result = await graphql(
        `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allMdx {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
        }
      }
    `
    )

    if (result.errors) {
        throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges
    const works = result.data.allMdx.edges

    posts.forEach((post, index) => {
        createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
            },
        })
    })

    works.forEach((work, index) => {
        createPage({
            path: work.node.fields.slug,
            component: workTemplate,
            context: {
                slug: work.node.fields.slug,
            },
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark` || `Mdx`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
