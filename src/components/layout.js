import React from "react"
import styled from 'styled-components'

import "normalize.css"
import '../styles/ben-fonts.css'
import '../styles/base.css'

import TopBar from './topBar'

const Layout = ({ children }) => {
  return (
    <div>
        <TopBar />
        <Main>{children}</Main>
    </div>
  )
}

export default Layout

const Main = styled.main`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
`