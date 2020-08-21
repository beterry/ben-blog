import React, {Component} from 'react'
import styled from 'styled-components'
// import { Link } from "gatsby"

import colors from '../styles/colors'

export default class TopBar extends Component {
    render() {
        return (
            <Navigation>
                
            </Navigation>
        )
    }
}

const Navigation = styled.nav`
    min-height: 3.5rem;
    background: ${colors.p.dark};
`