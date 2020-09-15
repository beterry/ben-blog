import React from "react"
import styled from 'styled-components'

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
import ImportantLinks from '../importantLinks'
import WorkHeader from '../work-header'
import Screens from '../screens'

//import styles
import colors from '../../styles/colors'
import ContentStyleWrapper from '../../styles/content-style-wrapper'

const shortcodes = { Link, Screens }

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
                        <WorkLayout>
                            <LinkWrapper>
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
                            </LinkWrapper>
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

const LinkWrapper = styled.div`
    @media screen and (min-width: 73.75rem){
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        left: 51rem;
        bottom: 0;
    }
`