import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

//layout components
import Margins from '../components/layouts/margins'
import WorkLayout from '../components/layouts/work-body'

//utility components
import SEO from "../components/seo"
import Padding from '../components/padding'

//components
import {ArticleInfo, InfoSection, Info} from '../components/article-info'
import {LinkOutButton, LinkSide, LinkOut} from '../components/links'

//import styles
import ContentStyleWrapper from '../styles/content-style-wrapper'

const shortcodes = { Link, LinkOutButton, LinkOut }

export default ({ children, pageContext }) => (
    <>
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
    </>
)