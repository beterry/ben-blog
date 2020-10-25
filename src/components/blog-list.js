import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import colors from '../styles/colors'

export default function BlogList({posts}) {
    return (
        <List>
            {posts.map((post) => 
                <BlogPreview title={post.title} date={post.date} type={post.type} slug={post.slug} key={post.title} tags={post.tags}/>
            )}
        </List>
    )
}

function BlogPreview({ title, date, type, slug, tags }) {
    return (
        <Link to={slug}>
            <Preview>
                <Meta>
                    <Date>{date}</Date>
                </Meta>
                <h3>{title}</h3>
                <TagList>
                    {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                </TagList>
            </Preview>
        </Link>
    )
}

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
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
`

const Tag = styled.li`
    background: ${colors.blue.opacity[20]};
    font-size: .75rem;
    padding: .25rem .5rem;
    border-radius: .25rem;
    margin-right: .25rem;
`

const Preview = styled.li`
    padding: 1rem;
    border-radius: .25rem;
    cursor: pointer;
    width: calc(100% + 2rem);
    position: relative;
    left: -1rem;
    h3{
        margin: 0;
        font-size: 1.125rem;
        line-height: 1;
    }
    &:hover{
        background: ${colors.blue.opacity[5]};
    }
`

const Meta = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: .15rem;
    p{
        margin: 0;
    }
    p:first-child{
        margin-right: 1rem;
    }
`

const Date = styled.p`
    font-size: .875rem;
    color: ${colors.gray[40]};
`