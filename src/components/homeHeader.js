import React from 'react'
import styled from 'styled-components'

import colors from '../styles/colors'

export default function homeHeader() {
    return (
        <Header>
            <Intro>Hi, my name is Ben.</Intro>
            <Heading>I'm a designerveloper.</Heading>
            <h3>design • er • vel • up • er</h3>
            <p>A strange species of creative professional that evolved from a graphic designer into a front-end developer. Has a great love for designing and coding great web experiences.</p>
        </Header>
    )
}

const Header = styled.header`

`

const Intro = styled.h1`
    font-size: 1.875rem;
    font-weight: 600;
    background: ${colors.s.main};
    display: inline-flex;
    margin: 0;
    padding: .5rem 1rem;
`

const Heading = styled.h2`
    font-size: 4.5rem;
    font-weight: 700;
    margin: 2rem 0;
`
