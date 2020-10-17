import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    ul,
    ol,
    dl {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    body {
        font-family:'Noto Sans KR', sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #000;
    }
`;

export default GlobalStyle;