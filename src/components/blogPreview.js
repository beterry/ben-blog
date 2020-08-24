import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import colors from '../styles/colors'

export default function blogPreview({ title, date, icon, slug }) {
    return (
        <Link to={slug}>
            <Preview>
                <IconWrapper>
                    <img src={icon} alt='logo' />
                </IconWrapper>
                <Title>
                    <h3>{title}</h3>
                    <p>{date}</p>
                </Title>
            </Preview>
        </Link>
    )
}

const Preview = styled.li`
    display: flex;
    border-bottom: 1px solid ${colors.gray[10]};
    padding: 1rem;
    &:hover{
        background: ${colors.gray[5]};
    }
    @media screen and (max-width: 37.5rem){
        flex-direction: column;
    }
`

const IconWrapper = styled.div`
    width: 1.5rem;
    margin: .3rem 1.5rem 0 0;
    flex-shrink: 0;
    img{
        width: 100%;
    }
    @media screen and (max-width: 37.5rem){
        margin: 0 0 .5rem 0;
    }
`

const Title = styled.div`
    flex-grow: 1;
    h3, p{
        margin: 0;
    }
    p{
        color: ${colors.gray[50]};
        margin-top: .375rem;
    }
    h3{
        font-size: 1.25rem;
    }
`