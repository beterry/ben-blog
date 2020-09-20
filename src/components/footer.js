import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import colors from '../styles/colors'

//layout components
import Margins from './layouts/margins'

//import icons
import mail from '../images/mail.svg'
import github from '../images/github.svg'
import home from '../images/home.svg'

import {IconButton} from './buttons'

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <Margins>
                    <FlexWrapper> 
                        <HomeButton to='/'><img src={home} alt='Email' /></HomeButton>
                        <IconButton as='a' href='mailto:benterry.design@gmail.com'><img src={mail} alt='Email' /></IconButton>
                        <IconButton as='a' href='https://github.com/beterry' target='_blank'><img src={github} alt='Github' /></IconButton>
                    </FlexWrapper>
                </Margins>
            </FooterWrapper>
        )
    }
}

const HomeButton = styled(Link)`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: none;
    color: ${props => props.white ? 'white' : 'black'};
    transition: transform .35s;
    &:hover{
        background: ${colors.blue.main};
    }
    svg{
      flex-shrink: 0;
    }
`

const FooterWrapper = styled.footer`
    background: ${colors.blue.dark};
`

const FlexWrapper =  styled.div`
    min-height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &>*{
        margin: 0 .5rem;
    }
`