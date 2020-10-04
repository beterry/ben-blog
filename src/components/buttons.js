import styled from 'styled-components'

import colors from '../styles/colors'

const Button = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 2.5rem;
    min-width: 4rem;
    padding: 0 1rem;
    flex: 0 0 auto;
    font-size: .875rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    background: none;
    text-decoration: none;
    transition: all .2s;
`

const ContainedButton = styled(Button)`
    background: ${colors.blue.main};
    color: white;
    border-radius: .25rem;
    &:hover{
        background: ${colors.blue.light};
        box-shadow: 0 2px 3px ${colors.gray[20]};
    }
`

const TextButton = styled(Button)`
    color: ${props => props.white ? 'white' : colors.p.main};
    padding: ${props => props.icon ? '0 1rem 0 .5rem' : null};
    & *:first-child{
        margin-right: .25rem;
    }
    &:hover{
        background: ${colors.p.dark};
    }
`

const IconButton = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: none;
    color: ${props => props.white ? 'white' : 'black'};
    transition: all .2s;
    &:hover{
        background: ${colors.blue.main};
    }
    svg{
      flex-shrink: 0;
    }
`

export {ContainedButton, TextButton, IconButton}