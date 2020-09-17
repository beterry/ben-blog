import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

//layout components
import Layout from "../layout"
import Margins from '../layouts/margins'
import WorkLayout from './work-body'

//utility components
import SEO from "../seo"
import Padding from '../padding'

//components
import {ArticleInfo, InfoSection, Info} from '../article-info'
import {LinkOutButton, LinkSide} from '../links'

//import styles
import ContentStyleWrapper from '../../styles/content-style-wrapper'

const shortcodes = { Link, LinkOutButton }

export default ({ children, pageContext }) => (
    <Layout>
        <SEO
            title={`${pageContext.frontmatter.title}`}
            description={pageContext.frontmatter.description}
        />
        <article>
            <Padding />
            <Margins>
                <WorkLayout>
                    <header>
                        <h1>{pageContext.frontmatter.title}</h1>
                    </header>
                    <Padding />
                    <ArticleInfo>
                        <InfoSection title='About'>
                            <Info title='Type'>{pageContext.frontmatter.type}</Info>
                            <Info title='Written'>{pageContext.frontmatter.date}</Info>
                        </InfoSection>
                        <InfoSection title='Links'>
                            <LinkSide url={pageContext.frontmatter.code}>Code on Github</LinkSide>
                            <LinkSide url={pageContext.frontmatter.deployed}>Finished Experiment</LinkSide>
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