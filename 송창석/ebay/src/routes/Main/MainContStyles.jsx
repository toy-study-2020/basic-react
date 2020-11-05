import styled from 'styled-components'

const MainWrapStyles = styled.div`
    > div {
        > section {
            padding: 40px 0;
        }
    }
`

const MainContTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 24px;
    color: #222;
`

const MainImgStyles = styled.div`
    overflow: hidden;
    display: block;
    font-size: 0;
    img {
        width: 100%;
    }
`

const MainListItemStyles = styled.li`
    width: 32%;
    border: 1px solid #ddd;
    background-color: #fff;
    margin-left: 15px;
    &:nth-of-type(3n + 1) {
        margin-left: 0;
    }
    a {
        display: block;
        position: relative;
    }
    img {
        width: 100%;
    }
`

const MainItemDescStyles = styled.div`
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
`



export {
    MainWrapStyles,
    MainContTitle,
    MainListItemStyles,
    MainItemDescStyles,
    MainImgStyles
}