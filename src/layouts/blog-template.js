import React from "react"

import { MDXProvider } from "@mdx-js/react"

//layout components
import Margins from '../components/layouts/margins'
import WorkLayout from '../components/layouts/work-body'

//utility components
import SEO from "../components/seo"
import Padding from '../components/padding'
import moment from 'moment'

//components
import {ArticleInfo, InfoSection, Info} from '../components/article-info'
import {LinkOutButton, LinkSide, LinkOut, LinkIn} from '../components/links'

//import styles
import ContentStyleWrapper from '../styles/content-style-wrapper'

const shortcodes = { LinkOutButton, LinkOut, LinkIn }

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
                            <Info title='Written'>{moment(pageContext.frontmatter.date).format("MMMM Do, YYYY")}</Info>
                        </InfoSection>
                        {pageContext.frontmatter.code || pageContext.frontmatter.deployed ?
                            <InfoSection title='Links'>
                                {pageContext.frontmatter.code && <LinkSide url={pageContext.frontmatter.code}>Code on Github</LinkSide>}
                                {pageContext.frontmatter.deployed && <LinkSide url={pageContext.frontmatter.deployed}>Finished Experiment</LinkSide>}
                            </InfoSection>:
                            null
                        }
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