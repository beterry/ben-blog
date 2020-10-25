import React from 'react'
import styled from 'styled-components'

import colors from '../styles/colors'

export default function tagList({children}) {
    return (
        <TagList>
            {children}
        </TagList>
    )
}

const TagList = styled.ul`
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0;
    padding-inline-start: 0;
    display: flex;
    flex-wrap: wrap;
    li{
        background: ${colors.blue.opacity[20]};
        font-size: .875rem;
        padding: .25rem .5rem;
        border-radius: .25rem;
        margin: .125rem .25rem .125rem 0;
    }
`