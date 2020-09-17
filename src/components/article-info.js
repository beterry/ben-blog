import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const InfoSection = ({title, children}) => (
    <InfoContainer>
        <h4>{title}</h4>
        {children}
    </InfoContainer>
)

const Info = ({title, children}) => (
    <InfoWrapper>
        <h5>{title}</h5>
        <p>{children}</p>
    </InfoWrapper>
)

const ArticleInfo = styled.div`
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width: 37.5rem){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 73.75rem){
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        left: 51rem;
        grid-template-columns: 1fr;
    }
`

const InfoContainer = styled.div`
    background: ${colors.green.opacity[10]};
    padding: 1rem;
    border-radius: .25rem;
    h4{
        margin: 0 0 .5rem 0;
        padding-left: 1rem;
        border-bottom: 1px solid ${colors.gray[10]};
        padding-bottom: .5rem;
    }
`

const InfoWrapper = styled.div`
    padding: 1rem;
    h5{
        font-size: .75rem;
        text-transform: uppercase;
        color: ${colors.green.main};
        letter-spacing: 2px;
    }
    p{
        margin: 0;
    }
`

export {ArticleInfo, InfoSection, Info}