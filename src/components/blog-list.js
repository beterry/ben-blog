import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import colors from '../styles/colors'

export default function BlogList({posts}) {
    return (
        <List>
            {posts.map((post) => 
                <BlogPreview title={post.title} date={post.date} type={post.type} slug={post.slug} key={post.title} />
            )}
        </List>
    )
}

function BlogPreview({ title, date, type, slug }) {
    return (
        <Link to={slug}>
            <Preview>
                <Meta>
                    {/* <Type>{type}</Type> */}
                    <Date>{date}</Date>
                </Meta>
                <h3>{title}</h3>
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
        line-height: 1.5;
    }
    &:hover{
        background: ${colors.green.opacity[10]};
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

const Type = styled.p`
    font-size: .875rem;
    color: ${colors.green.main};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
`

const Date = styled.p`
    font-size: .875rem;
    color: ${colors.green.main};
`