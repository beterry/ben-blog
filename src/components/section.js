import React from 'react'
import styled from 'styled-components'

export default function Section({ heading, children }) {
    return (
        <section>
            <Heading>{heading}</Heading>
            {children}
        </section>
    )
}

const Heading = styled.h2`
    margin: 0;
`