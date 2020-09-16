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
import WorkHeader from '../work-header'
import Screens from '../screens'

//import styles
import colors from '../../styles/colors'
import ContentStyleWrapper from '../../styles/content-style-wrapper'

const shortcodes = { Link, Screens }

const InfoSection = ({title, children}) => (
    <InfoContainer>
        <h4>{title}</h4>
        {children}
    </InfoContainer>
)

const Info = ({title, children}) => (
    <InfoWrapper>
        <h5>{title}</h5>
        <p>{children}</p>
    </InfoWrapper>
)

const LinkOut = ({url, children}) => (
    <a href={url} target='_blank' rel='noreferrer noopener'>{children}</a>
)

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
                                    <LinkOut url={pageContext.frontmatter.code}>Code on Github</LinkOut>
                                    <LinkOut url={pageContext.frontmatter.deployed}>Finished Prototype</LinkOut>
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

const ArticleInfo = styled.div`
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width: 37.5rem){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 73.75rem){
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        left: 51rem;
        grid-template-columns: 1fr;
    }
`

const InfoContainer = styled.div`
    background: ${colors.green.opacity[10]};
    padding: 1rem;
    border-radius: .25rem;
    h4{
        margin: 0 0 .5rem 0;
        padding-left: 1rem;
        border-bottom: 1px solid ${colors.gray[10]};
        padding-bottom: .5rem;
    }
    a{
        display: block;
        padding: 1rem;
        border-radius: .25rem;
        color: ${colors.green.main};
        text-decoration: none;
    }
    a:hover{
        background: ${colors.green.opacity[20]};
        color: black;
    }
`

const InfoWrapper = styled.div`
    padding: 1rem;
    h5{
        font-size: .75rem;
        text-transform: uppercase;
        color: ${colors.green.main};
        letter-spacing: 2px;
    }
    p{
        margin: 0;
    }
`