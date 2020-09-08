import React from 'react'
import styled from 'styled-components'

export default function ImportantLinks({links}) {
    return (
        <Container>
            <Heading>Links</Heading>
            {links.map((link, index) => 
                <LinkTitle key={index} href={link.url} target='_blank'>{link.title}</LinkTitle>
            )}
        </Container>
    )
}

const Container = styled.div`
    position: sticky;
    top: 3rem;
`

const Heading = styled.h2`
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 0 .5rem 0;
`

const LinkTitle = styled.a`
    display: block;
    margin-top: .5rem;
`