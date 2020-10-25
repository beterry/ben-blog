import React from 'react'
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import SEO from "../components/seo"

//layout components
import Padding from '../components/padding'
import Margins from '../components/layouts/margins'

import colors from '../styles/colors'

function BlogList({posts}) {
    return (
        <List>
            {posts.map((post) => 
                <BlogPreview title={post.title} date={post.date} slug={post.slug} key={post.title} tags={post.tags}/>
            )}
        </List>
    )
}

function BlogPreview({ title, date, slug, tags}) {
    return (
        <Link to={slug}>
            <Preview>
                <TitleWrapper>
                    <Date>{date}</Date>
                    <h3>{title}</h3>
                </TitleWrapper>
                <TagList>
                    {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                </TagList>
            </Preview>
        </Link>
    )
}

export default function blog({data}) {
    const posts = data.allMdx.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
    return (
        <>
            <SEO title="Blog" description="Written by Ben Terry"/>
            <Padding />
            <Margins>
                <h1>All Blogs</h1>
                <BlogList posts={posts} />
            </Margins>
            <Padding />
        </>
    )
}

export const blogPageQuery = graphql`
    query {
        allMdx(filter: {fields: {source: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        title
                        tags
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

const List = styled.ul`
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0;
    padding-inline-start: 0;
    margin-top: 1rem;
    position: relative;
    a{
        color: inherit;
        text-decoration: none;
    }
`

const TagList = styled.ul`
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0;
    padding-inline-start: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-left: 1rem;
    @media screen and (max-width: 48rem){
        justify-content: flex-start;
        margin: .875rem 0 0 0;
    }
`

const Tag = styled.li`
    background: ${colors.blue.opacity[20]};
    font-size: .875rem;
    padding: .25rem .5rem;
    border-radius: .25rem;
    margin: .125rem .25rem .125rem 0;
`

const Preview = styled.li`
    padding: 1rem;
    border-bottom: 1px solid ${colors.gray[10]};
    cursor: pointer;
    width: calc(100% + 2rem);
    position: relative;
    left: -1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover{
        background: ${colors.blue.opacity[5]};
    }
    @media screen and (max-width: 48rem){
        display: block;
    }
`

const TitleWrapper = styled.div`
    h3{
        margin: 0;
        font-size: 1.125rem;
        line-height: 1.15;
    }
`

const Date = styled.p`
    font-size: .875rem;
    color: ${colors.gray[40]};
    margin: 0;
`