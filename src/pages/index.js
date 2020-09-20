import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import SEO from "../components/seo"

//layout components
import Padding from '../components/padding'
import Section from '../components/section'
import Margins from '../components/layouts/margins'

//import components
import Hero from '../components/home-header'
import WorkGallery from '../components/work-gallery'
import BlogList from '../components/blog-list'
import {ContainedButton} from '../components/buttons'

const Homepage = ({ data }) => {
    const posts = data.blogQuery.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
    const works = data.workQuery.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
    const ben = data.ben.fluid

    console.log(data)

  return (
    <>
        <SEO title="Portfolio" />
        <Hero ben={ben}/>
        <Padding />
        <Margins>
            <WorkBlogLayout>
                <Section heading='Recent work'>
                    <WorkGallery works={works} />
                </Section>
                <Section heading='My blog'>
                    <BlogList posts={posts} />
                </Section>
            </WorkBlogLayout>
            <Padding />
            <ContentWrapper>
                <Section heading='About me'>
                    <p>My career, after university, began as a Graphic Designer. At both Lasting Image and Sign Medix, I was the only creative professional on staff and was responsible for designing marketing materials, creating and maintaining brand guidelines, communicating with clients, updating website content, and much more.</p>
                    <p>In 2017, I began experimenting with web technologies. I created my first personal website with vanilla HTML and CSS and realized front-end development was the perfect combination of my interest in design and technology. Soon after this realization, I enrolled in several online curriculums to foster my desire to become a front-end developer.</p>
                    <p>In 2018, I began working at Mail Shark. Working with the Creative Director, I introduced the marketing team to Adobe XD, which allowed for a more efficient approach to designing and prototyping digital content. I created a design system that established a cohesive look for their web pages, and developed a step-by-step, goal-oriented process for completing projects. In 2019, I was promoted to User Interface and Experience Designer. Although, as UI/UX Designer, I was not responsible for developing the interfaces I created at Mail Shark, I coded my projects independently as practice.</p>
                    <p>Currently, I’m working hard to learn and perfect my coding abilities to earn my first position as a front-end developer.</p>
                    <ResumeButton
                        as='a'
                        href='/Ben Terry Resume 2021.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        primary
                    >
                        My Resume
                    </ResumeButton>
                </Section>
            </ContentWrapper>
            <Padding />
        </Margins> 
    </>
  )
}

export default Homepage

export const pageQuery = graphql`
    query {
        siteQuery: site {
            siteMetadata {
                title
            }
        }
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
        ben: imageSharp(fluid: {originalName: {eq: "ben.png"}}) {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

const ResumeButton = styled(ContainedButton)`
    margin-top: 1.5rem;
    display: inline-flex;
`

const WorkBlogLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    @media screen and (min-width: 73.75rem){
        grid-template-columns: 48fr 24fr;   
        gap: 3rem;    
    }
`

const ContentWrapper = styled.div`
    max-width: 48rem;
`