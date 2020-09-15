import React from 'react'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'

//styles
import colors from '../styles/colors'

//layout components
import Padding from '../components/padding'
import Margins from '../components/layouts/margins'

export default function homeHeader({ ben }) {
    return (
        <Header>
            <Margins>
                <Flex>
                    <Left>
                        <Padding />
                        <hgroup>
                            <h1>Front-end Developer & Web Designer</h1>
                            <Highlight>
                                <h2>Hi, my name is Ben.</h2>
                                <div />
                            </Highlight>
                        </hgroup>
                        <p>I’m a creative professional with a great love for designing and developing great web experiences. This is my portfolio where I write about technology and design.</p>
                        <Padding />
                    </Left>
                    <Right>
                        <ImageContainer>
                            <Img fluid={ben} alt='Picture of Ben' />
                        </ImageContainer>
                    </Right>
                </Flex>
            </Margins>
        </Header>
    )
}

const Header = styled.header`
    background: ${colors.blue.dark};
    overflow: hidden;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
`

const Left = styled.div`
    color: white;
    flex-shrink: 0;
    width: 100%;
    h1{
        margin: 0;
    }
    p{
        margin-top: 2rem;
    }
    hgroup{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h1{
            order: 2;
        }
    }
    @media screen and (min-width: 67.5rem){
        max-width: 32rem;
    }
`

const Right = styled.div`
    flex-grow: 1;
    display: none;
    opacity: .5;
    @media screen and (min-width: 67.5rem){
        display: block;
    }
`

const extend = keyframes`
  from {
    right: calc((100% - 4rem));
  }
  to {
    right: 0;
  }
`;

const Highlight = styled.div`
    order: 1;
    display: flex;
    position: relative;
    align-items: center;
    min-height: 4rem;
    padding: 0 1.5rem;
    margin-bottom: 1rem;
    div{
        height: 4rem;
        position: absolute;
        left: 0;
        right: calc((100% - 4rem));
        background: linear-gradient(to right, ${colors.blue.main}, ${colors.green.main});
        border-radius: 2rem;
        animation: ${extend} 1s linear 1;
        animation-fill-mode: forwards;
        /* animation-delay: .5s; */
    }
    h2{
        margin: 0;
        z-index: 2;
        text-shadow: 0 2px 2px ${colors.gray[20]};
        @media screen and (max-width: 37.5rem){
            font-size: 1.5rem;
        }
    }
`

const ImageContainer = styled.div`
    margin: 0 auto;
    max-width: 30rem;
`


