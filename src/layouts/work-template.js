import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

//layout components
import WorkLayout from '../components/layouts/work-body'
import Margins from '../components/layouts/margins'

//utility components
import SEO from "../components/seo"
import Padding from '../components/padding'

//components
import WorkHeader from '../components/work-header'
import Screens from '../components/screens'
import {ArticleInfo, InfoSection, Info} from '../components/article-info'
import {LinkOutButton, LinkSide} from '../components/links'

//import styles
import ContentStyleWrapper from '../styles/content-style-wrapper'

const shortcodes = { Link, Screens, LinkOutButton }

export default ({ children, pageContext, data }) => {

    console.log(data)

    return (
        <>
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
            
        </>
    )   
}