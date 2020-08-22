import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import colors from '../styles/colors'

export default function blogPreview({ title, date, slug }) {
    return (
        <Link to={slug}>
            <Preview>
                <h3>{title}</h3>
                <p>{date}</p>
            </Preview>
        </Link>
    )
}

const Preview = styled.li`
    border-bottom: 1px solid ${colors.gray[10]};
    padding: 1rem 0;
    h3, p{
        margin: 0;
    }
    p{
        color: ${colors.p.light};
        margin-top: .375rem;
    }
    &:hover{
        h3{
            color: ${colors.s.main};
        }
    }
`