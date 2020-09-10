import React from "react"
import styled from 'styled-components'

import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

//layout components
import Layout from "../layout"
import BlogLayout from './blog-body'
import Margins from '../layouts/margins'

//utility components
import SEO from "../seo"
import Padding from '../padding'

//components
import ImportantLinks from '../importantLinks'
import WorkHeader from '../work-header'

//import styles
import colors from '../../styles/colors'
import ContentStyleWrapper from '../../styles/content-style-wrapper'

const shortcodes = { Link }

export default ({ children, pageContext, data }) => {

    console.log(data)

    return (
        <Layout>
            <SEO
                title={`${pageContext.frontmatter.title}`}
                description={pageContext.frontmatter.description}
            />
            <article>
                <WorkHeader
                    title={pageContext.frontmatter.title}
                    date={pageContext.frontmatter.date}
                    fluid={data.mainImage.edges[0].node.childImageSharp.fluid}
                />
                <Padding />
                <Margins>
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
                </Margins>
                <Padding />
            </article>
            
        </Layout>
    )   
}