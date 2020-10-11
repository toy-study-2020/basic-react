import styled from "styled-components";

export const MainGnbStyles = styled.nav`
    border-bottom: 1px solid #e7e7e7;
    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
    }
    ul {
        li {
            & + li {
                margin-left: 15px;
            }
        }
        a,
        button {
            padding: 8px;
            font-size: 13px;
        }
    }
`