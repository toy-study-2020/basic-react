import React from 'react';
import * as HeaderStyledCompoents from './HeaderStyles';

const Header = ({Link}) => {
  const {HeaderStyles, HeaderWrap, HeaderLogo, NavStyles} = HeaderStyledCompoents
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