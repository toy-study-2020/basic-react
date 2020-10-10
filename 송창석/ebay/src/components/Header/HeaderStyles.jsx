import styled from 'styled-components'

const HeaderStyles = styled.header`
    border-bottom: 1px solid #e7e7e7;
`

const HeaderWrap = styled.div`
    display: flex;
    max-width: 1020px;
    margin: 0 auto;
    padding: 12px 0;
    align-items: center;
    justify-content: space-between;
`

const HeaderLogo = styled.h1`
    width: 88px;
    height: 13px;
    a {
        display: block;
        width:100%;
        height:100%;
        background: url('http://static.itrcomm.com/img/common/common-icon.png') no-repeat;
    }
`

const NavStyles = styled.nav`
    ul {
        &:after{
            content: '';
            display: block;
            clear: both;
        }
        li {
            float: left;
            padding: 0 10px;
            border-left: 1px solid #222;
            &:first-child {
                border-left: 0;
            }
        }
        button,
        a {
            display: block;
            color: #222;
            font-size: 13px;
        }
    }
`

export {
    HeaderStyles,
    HeaderWrap,
    HeaderLogo,
    NavStyles
}