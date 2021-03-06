import styled from 'styled-components'
import colors from './colors'

export default styled.div`

    z-index: 1;

    h2{
        border-bottom: 1px solid ${colors.gray[10]};
        padding-bottom: .5rem;
    }

    ol, ul{
        margin: 1rem 0;
    }

    ol li, ul li{
        margin: .175rem 0; 
        line-height: 1.5;
    }

    .gatsby-resp-image-wrapper{
        margin: 2.25rem 0;
        border-radius: .25rem;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0,0,0,.25);
        /* border: 1px solid #a7a7a7; */
    }

    .gatsby-highlight{
        margin: 2.25rem 0;
        box-shadow: 0 0 10px rgba(0,0,0,.25);
    }

    p > img {
        margin: 2.25rem 0;
        border-radius: .25rem;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0,0,0,.25);
        width: 100%;
    }

    blockquote{
        margin-block-start: 2rem;
        margin-block-end: 2rem;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-left: 2rem; 
        border-left: 1px solid rgba(0,0,0,.1);
        color: rgba(0,0,0,.6);
    }

    .caption{
        font-size: .75rem;
        color: ${colors.gray[50]};
        margin-top: -1.5rem;
        line-height: 1.15;
    }
`