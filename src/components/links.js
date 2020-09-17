import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

import {ContainedButton} from './buttons'

const LinkOutBase = ({url, className, children}) => (
    <a href={url} target='_blank' rel='noreferrer noopener' className={className}>{children}</a>
)

const LinkOutButton = ({url, children}) => (
    <InlineContainedButton as='a' href={url} target='_blank' rel='noreferrer noopener'>{children}</InlineContainedButton>
)

const LinkSide = styled(LinkOutBase)`
    display: block;
    padding: 1rem;
    border-radius: .25rem;
    color: ${colors.green.main};
    text-decoration: none;
    &:hover{
        background: ${colors.green.opacity[20]};
        color: black;
    }
`

const InlineContainedButton = styled(ContainedButton)`
    margin: 1rem 1rem 0 0;
    display: inline-flex;
`

const LinkOut = styled(LinkOutBase)`
    color: ${colors.green.main};
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`

export {LinkOutButton, LinkSide, LinkOut}