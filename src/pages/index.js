import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import SEO from "../components/seo"

//layout components
import Padding from '../components/padding'
import Margins from '../components/layouts/margins'

//import components
import Hero from '../components/home-header'
import WorkGallery from '../components/work-gallery'
import BlogList from '../components/blog-list'
import {ContainedButton} from '../components/buttons'

import colors from '../styles/colors'

const Homepage = ({ data }) => {
    const posts = data.blogQuery.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
    const works = data.workQuery.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
    const ben = data.ben.fluid

    console.log(posts)

  return (
    <>
        <SEO title="Portfolio" description="Ben Terry, Front-end Developer & Web Designer"/>
        <Hero ben={ben}/>
        <Padding />
        <Margins>
            <WorkBlogLayout>
                <section>
                    <Heading>
                        <h2>Recent Work</h2>
                    </Heading>
                    <WorkGallery works={works} />
                </section>
                <section>
                    <Heading>
                        <h2>New Blogs</h2>
                        <Link to='/blog'>See all blogs</Link>
                    </Heading>
                    <BlogList posts={posts} />
                </section>
            </WorkBlogLayout>
            <Padding />
            <ContentWrapper>
                <section>
                    <Heading>
                        <h2>About Me</h2>
                    </Heading>
                    <p>My career, after university, began as a Graphic Designer. At both Lasting Image and Sign Medix, I was the only creative professional on staff and was responsible for designing marketing materials, creating and maintaining brand guidelines, communicating with clients, updating website content, and much more.</p>
                    <p>In 2017, I began experimenting with web technologies. I created my first personal website with vanilla HTML and CSS and realized front-end development was the perfect combination of my interest in design and technology. Soon after this realization, I enrolled in several online curriculums to foster my desire to become a front-end developer.</p>
                    <p>In 2018, I began working at Mail Shark. Working with the Creative Director, I introduced the marketing team to Adobe XD, which allowed for a more efficient approach to designing and prototyping digital content. I created a design system that established a cohesive look for their web pages and developed a step-by-step, goal-oriented process for completing projects. In 2019, I was promoted to User Interface and Experience Designer. Currently, as UI/UX Designer, it's my responsibility to plan, design, and prototype Mail Shark's digital projects.</p>
                    <ResumeButton
                        as='a'
                        href='/Ben Terry Resume 2021.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        primary
                    >
                        My Resume
                    </ResumeButton>
                </section>
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
                        tags
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
        blogQuery: allMdx(filter: {fields: {source: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 4) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        title
                        type
                        tags
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

const Heading = styled.div`
    border-bottom: 1px solid ${colors.gray[10]};
    padding-bottom: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        margin: 0;
    }
    a{
        text-decoration: none;
        color: ${colors.blue.light};
        padding: .5rem 1rem;
        border-radius: .25rem;
    }
    a:hover{
        background: ${colors.blue.opacity[10]};
        cursor: pointer;
    }
`