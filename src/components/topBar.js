import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import colors from '../styles/colors'

//import icons
import logo from '../images/logo.svg'
import mail from '../images/mail.svg'
import github from '../images/github.svg'

import {IconButton} from './buttons'

export default class TopBar extends Component {
    render() {
        return (
            <Navigation>
                <FlexWrapper>
                    <Left>
                        <Link to='/'>
                            <Logo>
                                <img src={logo} alt='Dino' />
                                <p>Ben Terry</p>
                            </Logo>
                        </Link>
                    </Left>
                    <Right>
                        <IconButton as='a' href='mailto:benterry.design@gmail.com'><img src={mail} alt='Email' /></IconButton>
                        <IconButton as='a' href='https://github.com/beterry' target='_blank'><img src={github} alt='Github' /></IconButton>
                    </Right>
                </FlexWrapper>
            </Navigation>
        )
    }
}

const Navigation = styled.nav`
    background: ${colors.p.dark};
    a{
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
    }
`

const FlexWrapper =  styled.div`
    min-height: 3.5rem;
    width: 80%;
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
`

const Right = styled.div`
    display: flex;
    align-items: center;
    a{
        margin-left: .5rem;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    p{
        font-family: 'Barlow', sans-serif;
        font-weight: 700;
        color: ${colors.s.main};
        margin: 0;
        font-size: 1.25rem;
    }
    img{
        margin-right: 1rem;
    }
`