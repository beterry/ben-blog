import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Padding from '../components/padding'
import Rule from '../components/rule'
import Section from '../components/section'

//import components
import Hero from '../components/home-header'
// import BlogList from '../components/blogList'
// import BlogPreview from '../components/blogPreview'
import {ContainedButton} from '../components/buttons'

const Homepage = ({ data }) => {
    const posts = data.blogQuery.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
    const works = data.workQuery.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
    const ben = data.ben.fluid

    console.log(data)

  return (
    <Layout>
        <SEO title="Portfolio" />
        <Hero ben={ben}/>
            <Padding />
            <Rule />
            <Padding />
        <Section heading='Recent work'>
            {works.map((work) => 
                <Link key={work.title} to={work.slug}><li key={work.title}>{work.title}</li></Link>
            )}
        </Section>
            <Padding />
            <Rule />
            <Padding />
        <Section heading='Playground'>
            {posts.map((post) => 
                <Link key={post.title} to={post.slug}><li key={post.title}>{post.title}</li></Link>
            )}
        </Section>
            <Padding />
        <Section heading='My evolution'>
            <p>My career, after university, began as a Graphic Designer. At both Lasting Image and Sign Medix, I was the only creative professional on staff and was responsible for designing marketing materials, creating and maintaining brand guidelines, communicating with clients, updating website content, and much more.</p>
            <p>In 2017, I began experimenting with web technologies. I created my first personal website with vanilla HTML and CSS and realized front-end development was the perfect combination of my interest in design and technology. Soon after this realization, I enrolled in several online curriculums to foster my desire to become a front-end developer.</p>
            <p>In 2018, I began working at Mail Shark. Working with the Creative Director, I introduced the marketing team to Adobe XD, which allowed for a more efficient approach to designing and prototyping digital content. I created a design system that established a cohesive look for their web pages, and developed a step-by-step, goal-oriented process for completing projects. In 2019, I was promoted to User Interface and Experience Designer. Although, as UI/UX Designer, I was not responsible for developing the interfaces I created at Mail Shark, I coded my projects independently as practice.</p>
            <p>Currently, I’m working hard to learn and perfect my coding abilities to earn my first position as a front-end developer.</p>
            <ResumeButton primary>My Resume</ResumeButton>
        </Section>
            <Padding />
        <Section heading='Timeline'>
            timeline here    
        </Section>
            <Padding />    
    </Layout>
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
                        icon {
                            publicURL
                        }
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
`
