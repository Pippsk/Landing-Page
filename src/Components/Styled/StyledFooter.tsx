import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: #003333;
    color:#fff;
    padding: 100px 0 60px;

    ul{
        list-style-type: none;
        margin-top: 40px;
        margin-right: 40px;
    }

    ul li{
        margin-bottom:20px;
        list-style-type: none;
    }

    p {
        text-align: right;
    }

    @media(max-width:${({theme}) => theme.mobile}) {
    text-align:center;
    ul {
        padding:0;
    }

    p {
        text-align: center;
    }
}
`