import styled from "styled-components"

export const MainEventStyles = styled.div`
    border-bottom: 1px solid #e7e7e7;
    .swiper-button-prev,
    .swiper-button-next {
        background-color: rgba(0,0,0,0.6);
        color: #fff;
        &:after {
            font-size: 20px;
        }
    }
    .swiper-slide {
        > a {
            display: block;
            border: 1px solid #ddd;
        }
    }
`