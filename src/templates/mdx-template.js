import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import styled from 'styled-components'

//layout components
import Layout from "../components/layout"
import BlogLayout from '../components/layouts/blogBody'

//utility components
import SEO from "../components/seo"
import Padding from '../components/padding'

//components
import ImportantLinks from '../components/importantLinks'

//import styles
import colors from '../styles/colors'
import '../styles/blog-styles.css'

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
    // console.log(mdx.frontmatter)
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
                
                <Padding />

                <BlogLayout>
                    <section>
                        {mdx.frontmatter.code ? 
                            <ImportantLinks
                                links={[
                                    {
                                        title: 'Code on Github',
                                        url: mdx.frontmatter.code
                                    },
                                    {
                                        title: 'Live prototype',
                                        url: mdx.frontmatter.deployed
                                    }
                                ]}
                            />:
                            null
                        }
                    </section>
                    
                    <section>
                        <MDXProvider components={shortcodes}>
                            <MDXRenderer>{mdx.body}</MDXRenderer>
                        </MDXProvider>
                    </section>
                    
                </BlogLayout>
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