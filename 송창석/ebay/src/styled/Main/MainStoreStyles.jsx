import styled from "styled-components";

export const MainStoreStyles = styled.div`
    ul {
        margin-top: 20px;
        li {
            width: 10%;
            & + li {
                margin-left: 15px;
            }
        }
    }
    div {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-top: 100%;
        position: relative;
        border-radius: 50%;
        background-color: #e7e7e7;
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        & + span {
            display: block;
            padding-top: 10px;
            font-size: 13px;
            text-align: center;
        }
    }
`