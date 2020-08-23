import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import colors from '../styles/colors'

//import icons
import logo from '../images/logo.svg'

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
                </FlexWrapper>
            </Navigation>
        )
    }
}

const Navigation = styled.nav`
    background: ${colors.p.dark};
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
    align-items: center;
`

const Left = styled.div`
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