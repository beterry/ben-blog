import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

//layout components
import WorkLayout from '../components/layouts/work-body'
import Margins from '../components/layouts/margins'

//utility components
import SEO from "../components/seo"
import Padding from '../components/padding'
import moment from 'moment'

//components
import WorkHeader from '../components/work-header'
import Screens from '../components/screens'
import {ArticleInfo, Info, DateWritten, TagList} from '../components/article-info'
import {LinkOutButton} from '../components/links'

//import styles
import ContentStyleWrapper from '../styles/content-style-wrapper'

const shortcodes = { Link, Screens, LinkOutButton }

export default ({ children, pageContext, data }) => {

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
                    demo={pageContext.frontmatter.deployed}
                    code={pageContext.frontmatter.code}
                />
                <Padding />
                    <Margins>
                        <WorkLayout>
                            <ArticleInfo>
                                <Info title='Updated'><DateWritten>{moment(pageContext.frontmatter.date).format("MMMM D, YYYY")}</DateWritten></Info>
                                <Info title='Tags'>
                                    <TagList>
                                        {pageContext.frontmatter.tags.map((tag, index) => <li key={index}>{tag}</li>)}
                                    </TagList>
                                </Info>
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