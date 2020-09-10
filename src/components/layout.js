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
        <main>{children}</main>
    </div>
  )
}

export default Layout