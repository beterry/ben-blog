import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

import {ContainedButton, TextButton} from '../components/buttons'

const Info = ({title, children}) => (
    <InfoWrapper>
        <h5>{title}</h5>
        {children}
    </InfoWrapper>
)

const ArticleInfo = styled.div`
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    @media screen and (min-width: 37.5rem){
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
    @media screen and (min-width: 73.75rem){
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        left: 52rem;
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
`

const InfoWrapper = styled.div`
    h5{
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
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
    li{
        background: ${colors.blue.opacity[20]};
        font-size: .875rem;
        padding: .25rem .5rem;
        border-radius: .25rem;
        margin: .125rem .25rem .125rem 0;
    }
`

const DateWritten = styled.p`
    color: ${colors.gray[50]};
    margin: 0;
    line-height: 1;
`

const DemoButton = styled(ContainedButton)`
    width: 100%;
    margin-bottom: .5rem;
`


const CodeButton = styled(TextButton)`
    width: 100%;
    margin-bottom: .5rem;
`

export {ArticleInfo, Info, TagList, DateWritten, DemoButton, CodeButton}