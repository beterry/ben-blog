import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import colors from '../styles/colors'

//layout components
import Margins from './layouts/margins'

//import icons
import mail from '../images/mail.svg'
import github from '../images/github.svg'

import {IconButton} from './buttons'

export default class TopBar extends Component {
    render() {
        return (
            <Navigation>
                <Margins>
                    <FlexWrapper>
                        <Left>
                            <Link to='/'>
                                <Logo>
                                    <div />
                                    <p>Ben Terry</p>
                                </Logo>
                            </Link>
                        </Left>
                        <Right>
                            <IconButton as='a' href='mailto:benterry.design@gmail.com'><img src={mail} alt='Email' /></IconButton>
                            <IconButton as='a' href='https://github.com/beterry' target='_blank'><img src={github} alt='Github' /></IconButton>
                        </Right>
                    </FlexWrapper>
                </Margins>
            </Navigation>
        )
    }
}

const Navigation = styled.nav`
    background: ${colors.blue.dark};
    a{
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
    }
`

const FlexWrapper =  styled.div`
    min-height: 3.5rem;
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
    position: relative;
    align-items: center;
    height: 2rem;
    padding: 0 .6rem;
    p{
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        color: white;
        margin: 0;
        font-size: 1.25rem;
        text-shadow: 0 2px 2px ${colors.gray[20]};
        z-index: 2;
    }
    div{
        height: 2rem;
        position: absolute;
        left: 0;
        right: calc((100% - 2rem));
        background: linear-gradient(to right, ${colors.blue.main}, ${colors.green.main});
        border-radius: 1rem;
        transition: right .2s;
    }
    &:hover{
        div{
            right: 0;
        }
    }
`