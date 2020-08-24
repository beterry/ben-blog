import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import colors from '../styles/colors'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Padding from '../components/padding'

import '../styles/blog-styles.css'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark

  console.log(post)

  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title}`}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
            <Padding />
        <header>
            <Icon src={post.frontmatter.icon.publicURL} alt='' />
            <h1>{post.frontmatter.title}</h1>
            <DisplayDate>{post.frontmatter.date}</DisplayDate>
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
        icon {
            publicURL
        }
      }
    }
  }
`
const Icon = styled.img`
    margin-bottom: 1rem;
`

const DisplayDate = styled.p`
    color: ${colors.gray[50]};
`