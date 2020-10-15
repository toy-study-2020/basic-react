import styled from 'styled-components'

const MainBestStyles = styled.div`
    background-color: #f7f6f5;
`

const BestImgStyles = styled.div`
    overflow: hidden;
    display: block;
    height: 220px;
    font-size: 0;
`

const BestDiscountStyles = styled.label`
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
`
const DiscountRateStyles = styled.div`
    font-weight: bold;
    font-size: 15px;
    color: #fff;
    background-color: #ff2234;
`

const DiscountFeeStyles = styled.div`
    border: 1px solid #ddd;
    font-weight: bold;
    font-size: 12px;
    background-color: #fff;
`

const BestPriceStyles = styled.div`
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
`

const PriceOriginStyles = styled.span`
    float: left;
    padding: 0 2px;
    font-size: 13px;
    color: #5d5d5d;
    &:before {
        content: '$';
    }
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
`

const PriceNowStyles = styled.strong`
    float: right;
    font-size: 18px;
    font-weight: bold;
    color: #ff2234;
    &:before {
        content: '$';
    }
`

export {
    MainBestStyles,
    BestImgStyles,
    BestDiscountStyles,
    DiscountRateStyles,
    DiscountFeeStyles,
    BestPriceStyles,
    PriceOriginStyles,
    PriceNowStyles
}