import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

import colors from '../styles/colors'

const Work = ({title, date, fluid}) => (
    <GridItem>
        <ImageContainer>
            <Img fluid={fluid} alt='Screenshot of project' />
        </ImageContainer>
        <h3>{title}</h3>
        <p>{date}</p>
    </GridItem>
)

export default function WorkGallery({works}) {
    return (
        <Grid>
            {works.map((work) => 
                <Link key={work.title} to={work.slug}><Work title={work.title} date={work.date} fluid={work.display.childImageSharp.fluid}/></Link>
            )}
        </Grid>
    )
}

const Grid = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 2rem 0 0 0;

    list-style-type: none;
    padding-inline-start: 0;

    h3{
        font-size: 1.25rem;
        margin: 1rem 0 0 0;
    }

    p{
        margin: .5rem 0 0 0;
        color: ${colors.gray[60]};
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`

const GridItem = styled.li`
    cursor: pointer;
    &:hover{
        h3{
            color: ${colors.green.main};
        }
    }
`

const ImageContainer = styled.div`
    border-radius: .25rem;
    box-shadow: 0 0 .25rem ${colors.gray[20]};
    overflow: hidden;
`