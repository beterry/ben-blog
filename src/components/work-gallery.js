import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

//import components
import TagList from './tag-list'

import colors from '../styles/colors'

const Work = ({title, date, tags, fluid}) => (
    <GridItem>
        <ImageContainer>
            <Img fluid={fluid} alt='Screenshot of project' />
        </ImageContainer>
        <h3>{title}</h3>
        <TagList>
            {tags.map((tag, index) => <li key={index}>{tag}</li>)}
        </TagList>
    </GridItem>
)

export default function WorkGallery({works}) {
    return (
        <Grid>
            {works.map((work) => 
                <Link key={work.title} to={work.slug}><Work title={work.title} date={work.date} tags={work.tags} fluid={work.display.childImageSharp.fluid}/></Link>
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
        font-size: 1.125rem;
        line-height: 1.5;
        margin: 1rem 0 .5rem 0;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    @media screen and (max-width: 37.5rem){
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

const GridItem = styled.li`
    cursor: pointer;
    &:hover{
        h3{
            color: ${colors.blue.light};
        }
    }
`

const ImageContainer = styled.div`
    border-radius: .25rem;
    box-shadow: 0 0 .25rem ${colors.gray[20]};
    overflow: hidden;
`