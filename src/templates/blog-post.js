import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Padding from '../components/padding'

import '../styles/blog-styles.css'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={`Ben Terry | ${post.frontmatter.title}`}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
            <Padding />
        <header>
          <h1>{post.frontmatter.title}</h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <Padding />
      </article>      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
