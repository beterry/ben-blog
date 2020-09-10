import React from 'react'
import styled from 'styled-components'

export default function WorkBody({children}) {
    return (
        <WorkContent>
            {children}
        </WorkContent>
    )
}

const WorkContent = styled.div`
    position: relative;
    h1, h2, h3, h4, p{
        max-width: 48rem;
    }
    ul, ol{
        max-width: 46rem;
    }
    h2:first-child{
        margin: 0;
    }
`