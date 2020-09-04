import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Padding from '../components/padding'

import colors from '../styles/colors'

import '../styles/blog-styles.css'

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
    console.log(mdx.frontmatter)
    return (
        <Layout>
            <SEO
                title={`${mdx.frontmatter.title}`}
                description={mdx.frontmatter.description}
            />
            <article>
                    <Padding />
                <header>
                    <h1>{mdx.frontmatter.title}</h1>
                    <DisplayDate>{mdx.frontmatter.date}</DisplayDate>
                </header>
                
                {mdx.frontmatter.code ? 
                    <div>
                        <a href={mdx.frontmatter.code}>{mdx.frontmatter.code}</a>    
                        <a href={mdx.frontmatter.deployed}>{mdx.frontmatter.deployed}</a>    
                    </div>:
                    null
                }

                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXProvider>

                    <Padding />
            </article>
            
        </Layout>
    )
}

export const pageQuery = graphql`
  query WorkQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        code
        deployed
      }
    }
  }
`

const DisplayDate = styled.p`
    color: ${colors.gray[50]};
`