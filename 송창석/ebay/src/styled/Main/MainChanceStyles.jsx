import styled from "styled-components"

const MainChanceStyles = styled.div`
    li {
        margin-top: 15px;
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3) {
            margin-top: 0;
        }
    }
`

const ChanceDescItemStyles = styled.dl`
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
`

const ChanceBadgeStyles = styled.dd`
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
`

export {
    MainChanceStyles,
    ChanceDescItemStyles,
    ChanceBadgeStyles
}