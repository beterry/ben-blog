import React from "react"
import styled from 'styled-components'

import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

const shortcodes = { Link }

export default ({ children }) => (
    <Blue>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Blue>
)

const Blue = styled.div`
    background: blue;
`