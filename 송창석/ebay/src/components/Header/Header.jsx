import React from 'react';
import { HeaderStyles, HeaderWrap, HeaderLogo, NavStyles } from './HeaderStyles';


const Header = ({Link}) => {
    return (
        <HeaderStyles>
            <HeaderWrap>
                <HeaderLogo>
                    <Link to="/"></Link>
                </HeaderLogo>
                <NavStyles>
                    <ul>
                        <li>
                            <Link to="/login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/join">회원가입</Link>
                        </li>
                    </ul>
                </NavStyles>
            </HeaderWrap>
        </HeaderStyles>
    );
};

export default Header;