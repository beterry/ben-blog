import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

//styles
import colors from '../styles/colors'

export default function Screens({images, before}) {
    return (
        <Container>
            <Grid before={before}>
                <ImageContainer>
                    <Img
                        fluid={images[0]}
                        alt='screenshot' 
                        style={{boxShadow: '0 0 2px rgba(0,0,0,.2)'}}
                    />
                </ImageContainer>
                <ImageContainer>
                    <Img
                        fluid={images[1]}
                        alt='screenshot'
                        style={{boxShadow: '0 0 2px rgba(0,0,0,.2)'}}
                    />
                </ImageContainer>
            </Grid>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    margin: 2.25rem 0;
    background: #E4E4E4;
    border: 1px solid ${colors.gray[10]};
    padding: 5%;
    border-radius: .25rem;
    z-index: 2;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.before ? '1fr 1fr' : '1fr 3.84fr'};
    gap: 5%;
`

const ImageContainer = styled.div`
    width: 100%;
`