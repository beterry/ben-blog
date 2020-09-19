import React from "react"
import styled from 'styled-components'

import "normalize.css"
import '../styles/ben-fonts.css'

import TopBar from '../components/topBar'

export default function Layout({ children }) {
  return (
    <Wrapper>
        <TopBar />
        <main>{children}</main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    overflow: hidden;
`