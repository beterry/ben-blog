import React from 'react'
import styled from 'styled-components'

import colors from '../styles/colors'

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
    border-bottom: 1px solid ${colors.gray[10]};
    padding-bottom: .5rem;
`