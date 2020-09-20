import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

//import components
import SEO from "../components/seo"
import Padding from '../components/padding'
import Margins from '../components/layouts/margins'
import Section from '../components/section'
import WorkGallery from '../components/work-gallery'
import BlogList from '../components/blog-list'

const NotFoundPage = ({ data }) => {
    const posts = data.blogQuery.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
    const works = data.workQuery.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
    return (
        <>
            <SEO title="Page not found" />
            <Margins>
                <Padding />
                <h1>Oops! This page does not exist.</h1>
                <Padding />
                <WorkBlogLayout>
                    <Section heading='Recent work'>
                        <WorkGallery works={works} />
                    </Section>
                    <Section heading='My blog'>
                        <BlogList posts={posts} />
                    </Section>
                </WorkBlogLayout>
                <Padding />
            </Margins>
        </>
    )
}

const WorkBlogLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    @media screen and (min-width: 73.75rem){
        grid-template-columns: 48fr 24fr;   
        gap: 3rem;    
    }
`

export default NotFoundPage

export const pageQuery = graphql`
    query {
        workQuery: allMdx(filter: {fields: {source: {eq: "work"}}}, sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        display {
                            childImageSharp{
                                fluid{
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        blogQuery: allMdx(filter: {fields: {source: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        type
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
