import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

export default function ImportantLinks({links}) {
    return (
        <Container>
            <Heading>Links</Heading>
            {links.map((link, index) => 
                <Link key={index} href={link.url} target='_blank'>{link.title}</Link>
            )}
        </Container>
    )
}

const Container = styled.div`
    position: sticky;
    top: 3rem;
`

const Heading = styled.h2`
    font-size: .875rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
`

const Link = styled.a`
    display: block;
    margin-top: .5rem;
    color: ${colors.blue.main};
    text-decoration: none;
    &:hover{
        color: ${colors.blue.light}
    }
`