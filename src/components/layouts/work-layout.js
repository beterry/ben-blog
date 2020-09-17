import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

//layout components
import Layout from "../layout"
import WorkLayout from './work-body'
import Margins from '../layouts/margins'

//utility components
import SEO from "../seo"
import Padding from '../padding'

//components
import WorkHeader from '../work-header'
import Screens from '../screens'
import {ArticleInfo, InfoSection, Info} from '../article-info'
import {LinkOutButton, LinkSide} from '../links'

//import styles
import ContentStyleWrapper from '../../styles/content-style-wrapper'

const shortcodes = { Link, Screens, LinkOutButton }

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
                    description={pageContext.frontmatter.description}
                    fluid={data.mainImage.edges[0].node.childImageSharp.fluid}
                />
                <Padding />
                    <Margins>
                        <WorkLayout>
                            <ArticleInfo>
                                <InfoSection title='About'>
                                    <Info title='Company'>Mail Shark</Info>
                                    <Info title='Position'>UI / UX Designer I</Info>
                                    <Info title='Started'>{pageContext.frontmatter.date}</Info>
                                </InfoSection>
                                <InfoSection title='Links'>
                                    <LinkSide url={pageContext.frontmatter.code}>Code on Github</LinkSide>
                                    <LinkSide url={pageContext.frontmatter.deployed}>Finished Prototype</LinkSide>
                                </InfoSection>
                            </ArticleInfo>
                            <ContentStyleWrapper>
                                <MDXProvider components={shortcodes}>{children}</MDXProvider>
                            </ContentStyleWrapper>
                        </WorkLayout>
                    </Margins>
                <Padding />
            </article>
            
        </Layout>
    )   
}