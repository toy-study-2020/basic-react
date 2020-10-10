import styled from 'styled-components'

const MainWrapStyles = styled.div`
    > div {
        > section {
            padding: 40px 0;
        }
    }
`

const MainGnbStyles = styled.nav`
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

const MainContTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 24px;
    color: #222;
`

const MainStoreStyles = styled.div`
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

const MainListItemStyles = styled.li`
    width: 32%;
    border: 1px solid #ddd;
    background-color: #fff;
    & + li {
        margin-left: 15px;
    }
    &:nth-of-type(3n + 1) {
        margin-left: 0;
    }
    .cont {
        display: block;
        position: relative;
    }
    .img {
        overflow: hidden;
        display: block;
        font-size: 0;
        img {
            width: 100%;
        }
    }
    .desc {
        position: relative;
        padding: 15px 10px;
        min-height: 120px;
        border-top: 1px solid #ddd;
        dt,
        dd {
            font-size: 14px;
        }
        dt {
            padding-bottom: 8px;
            font-weight: bold;
        }
        dd {
            color: #666;
        }
    }
`

const MainBestStyles = styled.div`
    background-color: #f7f6f5;
    .img {
        height: 220px;
    }
    .discount {
        position: absolute;
        left: -1px;
        top: -1px;
        width: 60px;
        > * {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            text-align: center;
        }
        .rate {
            font-weight: bold;
            font-size: 15px;
            color: #fff;
            background-color: #ff2234;
        }
        .fee {
            border: 1px solid #ddd;
            font-weight: bold;
            font-size: 12px;
            background-color: #fff;
        }
    }
    .desc {
        .price {
            padding-top: 15px;
            &:after {
                content: '';
                display: block;
                clear: both;
            }
            > * {
                display: inline-block;
                position: relative;
            }
            .origin,
            .now {
                &:before {
                    content: '$';
                }
            }
            .origin {
                float: left;
                padding: 0 2px;
                font-size: 13px;
                color: #5d5d5d;
                &:after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 1px;
                    background-color: #5d5d5d;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 50%;
                }
            }
            .now {
                float: right;
                font-size: 18px;
                font-weight: bold;
                color: #ff2234;
            }
        }
    }
`

const MainEventStyles = styled.div`
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
        .img {
            overflow: hidden;
            display: block;
            font-size: 0;
            img {
                width: 100%;
            }
        }
        .desc {
            min-height: 100px;
            padding: 15px 10px;
            border-top: 1px solid #ddd;
            dt,
            dd {
                font-size: 14px;
            }
            dt {
                padding-bottom: 8px;
                font-weight: bold;
            }
            dd {
                color: #666;
            }
        }
    }
`

const MainChanceStyles = styled.div`
    li {
        margin-top: 15px;
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3) {
            margin-top: 0;
        }
    }
    dt {
        strong,
        small {
            &:before {
                content: '$'
            }
        }
        small {
            margin-left: 10px;
            font-weight: normal;
            font-size: 13px;
            color: #bbb;
            text-decoration-line: line-through;
        }
    }
    dd {
        margin-top: 10px;
    }
    .badge {
        position: absolute;
        right: 10px;
        bottom: 15px;
        margin-top: 0;
        em {
            display: inline-block;
            padding: 4px 8px;
            margin-left: 10px;
            font-weight: bold;
            background-color: #1D4CD8;
            color: #fff;
            &:before {
                content: '+';
                margin-right: 4px;
            }
            &:first-child {
                margin-left: 0;
            }
        }
    }
`


export {
    MainWrapStyles,
    MainContTitle,
    MainListItemStyles,
    MainGnbStyles,
    MainStoreStyles,
    MainBestStyles,
    MainEventStyles,
    MainChanceStyles
}