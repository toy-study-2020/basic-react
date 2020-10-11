import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        color: #222;
    }
    a {
        font-size: 62.5%;
        text-decoration: none;
        color: #222;
    }
    button {
        padding: 0;
        border: 0;
        background: transparent;
        outline: none;
    }
`

const IntervalSection = styled.section`
    max-width: 1020px;
    margin: 0 auto;
`

const ListColStyles = styled.ul`
    &:after {
        content: '';
        display: block;
        clear: both;
    }
    li {
        float: left;
    }
    a,
    button {
        display: block;
    }
`



export {
    GlobalStyles,
    ListColStyles,
    IntervalSection,
}