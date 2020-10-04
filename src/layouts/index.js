import React from "react"
import styled from 'styled-components'

import "normalize.css"
import '../styles/ben-fonts.css'
import '../styles/base.css'

import TopBar from '../components/topBar'
import Footer from '../components/footer'

export default function Layout({ children }) {
  return (
    <Wrapper>
        <TopBar />
        <main>{children}</main>
        <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    overflow: hidden;
`