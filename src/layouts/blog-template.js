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
import {ArticleInfo, Info, DateWritten, TagList, DemoButton, CodeButton} from '../components/article-info'
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
                        <Info title='Updated'><DateWritten>{moment(pageContext.frontmatter.date).format("MMMM D, YYYY")}</DateWritten></Info>
                        <Info title='Tags'>
                            <TagList>
                                {pageContext.frontmatter.tags.map((tag, index) => <li key={index}>{tag}</li>)}
                            </TagList>
                        </Info>
                        {pageContext.frontmatter.code || pageContext.frontmatter.deployed ?
                            <Info title='Skip Ahead'>
                                {pageContext.frontmatter.deployed && <DemoButton as='a' target='_blank' rel='noreferrer noopener' href={pageContext.frontmatter.deployed}>View Demo</DemoButton>}
                                {pageContext.frontmatter.code && <CodeButton as='a' target='_blank' rel='noreferrer noopener' href={pageContext.frontmatter.code}>Code on Github</CodeButton>}
                            </Info>:
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