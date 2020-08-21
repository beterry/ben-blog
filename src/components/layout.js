import React from "react"
import styled from 'styled-components'

import "normalize.css"

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
    max-width: 768px;
    margin: 0 auto;
`