import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

//styles
import colors from '../styles/colors'

//layout components
 import Padding from '../components/padding'
 import Margins from '../components/layouts/margins'

export default function WorkHeader({title, date, fluid}) {
    return (
        <Header>
            <Padding />
            <Margins>
                <Flex>
                    <Right>
                        <ImageWrapper>
                            <Img fluid={fluid} alt="Mockup of project" />
                        </ImageWrapper>
                    </Right>
                    <Padding />
                    <Left>
                        <Title>{title}</Title>
                        <Date>{date}</Date>
                    </Left>
                </Flex>
            </Margins>
            <Padding />
        </Header>
    )
}

const Header = styled.header`
    background: ${colors.blue.dark};
    overflow: hidden;
`

const Flex = styled.div`
    display: flex;
    @media screen and (max-width: 67.5rem){
        flex-direction: column;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    width: 100%;

    @media screen and (min-width: 67.5rem){
        max-width: 32rem;
        order: 1;
    }
`

const Right = styled.div`
    flex-grow: 1;

    @media screen and (min-width: 67.5rem){
        order: 2;
    }
`

const Title = styled.h1`
    color: white;
`

const Date = styled.p`
    color: ${colors.green.main};
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
`

const ImageWrapper = styled.div`
    min-width: 50rem;

    @media screen and (max-width: 37.5rem){
        min-width: 30rem;
    }
`