import React from "react"
import styled from 'styled-components'

import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

//layout components
import Layout from "../layout"
import BlogLayout from '../layouts/blogBody'

//utility components
import SEO from "../seo"
import Padding from '../padding'

//components
import ImportantLinks from '../importantLinks'

//import styles
import colors from '../../styles/colors'
import ContentStyleWrapper from '../../styles/content-style-wrapper'

const shortcodes = { Link }

export default ({ children, pageContext }) => (
    <Layout>
        <SEO
            title={`${pageContext.frontmatter.title}`}
            description={pageContext.frontmatter.description}
        />
        <article>
            <Padding />
            <header>
                <h1>{pageContext.frontmatter.title}</h1>
                <DisplayDate>{pageContext.frontmatter.date}</DisplayDate>
            </header>
            <Padding />
            <BlogLayout>
                <section>
                    <ImportantLinks
                        links={[
                            {
                                title: 'Code on Github',
                                url: pageContext.frontmatter.code
                            },
                            {
                                title: 'Live prototype',
                                url: pageContext.frontmatter.deployed
                            }
                        ]}
                    />
                </section>
                <section>
                    <ContentStyleWrapper>
                        <MDXProvider components={shortcodes}>{children}</MDXProvider>
                    </ContentStyleWrapper>
                </section>
            </BlogLayout>
            <Padding />
        </article>
        
    </Layout>
)

const DisplayDate = styled.p`
    color: ${colors.green.main};
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
`