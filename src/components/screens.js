import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

//styles
import colors from '../styles/colors'

export default function Screens({images, before}) {
    return (
        <Container>
            <Grid before={before}>
                {images.map((image, index) => 
                    <ImageContainer key={image.src}>
                        <Img
                            fluid={image}
                            alt='screenshot' 
                            style={{boxShadow: '0 0 2px rgba(0,0,0,.2)'}}
                        />
                    </ImageContainer>
                )}
            </Grid>
        </Container>
    )
}

const Container = styled.div`
    margin: 2.25rem 0;
    background: #E4E4E4;
    border: 1px solid ${colors.gray[10]};
    /* padding: 5%; */
    border-radius: .25rem;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.before ? '1fr 1fr' : '1fr 3.84fr'};
    gap: 2rem;
    margin: 5%;
`

const ImageContainer = styled.div`
    width: 100%;
`