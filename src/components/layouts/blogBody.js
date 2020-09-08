import styled from 'styled-components'

const Layout = styled.div`
    width: 100%;
    section:first-child{
        
    }
    section:last-child{
        
    }

    @media screen and (min-width: 1180px){
        display: flex;

        /* Links */
        section:first-child{
            order: 2;
            flex-grow: 1;
            margin-left: 5%;
        }

        /* Content */
        section:last-child{
            max-width: 768px;
            h2:first-child{
                margin: 0;
            }

        }
    }
`

export default Layout