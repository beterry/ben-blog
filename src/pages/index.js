import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Padding from '../components/padding'
import Rule from '../components/rule'
import Section from '../components/section'

//import components
import Hero from '../components/homeHeader'
import BlogList from '../components/blogList'
import BlogPreview from '../components/blogPreview'
import {ContainedButton} from '../components/buttons'

const Homepage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
  const works = data.allMdx.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))

  return (
    <Layout>
        <SEO title="Portfolio" />
            <Padding />
        <Hero />
            <Padding />
            <Rule />
            <Padding />
        <Section heading='Recent work'>
            {works.map(work => <p key={work.title}>{work.title}</p>)}
        </Section>
            <Padding />
            <Rule />
            <Padding />
        <Section heading='Playground'>
            <BlogList>
                {posts.map((post) => 
                    <BlogPreview
                        key={post.title}
                        title={post.title}
                        date={post.date}
                        icon={post.icon.publicURL}
                        slug={post.slug}
                    />
                )}
            </BlogList>
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
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            icon {
                publicURL
            }
          }
        }
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const ResumeButton = styled(ContainedButton)`
    margin-top: 1.5rem;
`
