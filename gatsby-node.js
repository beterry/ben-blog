const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const mdxTemplate = path.resolve(`./src/templates/mdx-template.js`)
    const result = await graphql(`
      {
        allMdx(
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
      }
    `)

    if (result.errors) {
        throw result.errors
    }

    // Create blog posts pages.
    const pages = result.data.allMdx.edges

    pages.forEach((page, index) => {
        createPage({
            path: page.node.fields.slug,
            component: mdxTemplate,
            context: {
                slug: page.node.fields.slug,
            },
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const fileNode = getNode(node.parent)
        const value = `/${fileNode.sourceInstanceName}${createFilePath({ node, getNode})}`
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
