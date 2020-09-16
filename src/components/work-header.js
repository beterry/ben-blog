import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

//styles
import colors from '../styles/colors'

//layout components
 import Padding from '../components/padding'
 import Margins from '../components/layouts/margins'

export default function WorkHeader({title, description, fluid}) {
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
                        <Description>{description}</Description>
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

const Description = styled.p`
    color: white;
    font-size: 1.25rem;
    line-height: 1.5;
`

const ImageWrapper = styled.div`
    min-width: 50rem;

    @media screen and (max-width: 37.5rem){
        min-width: 30rem;
    }
`