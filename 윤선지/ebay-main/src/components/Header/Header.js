import React from 'react';
import Menu from '../menu';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './Header.scss';

const InnerLayout = styled.div`
	width: 1250px;
	margin: 0 auto;
	&:after {
		content: '';
		display: block;
		clear: both;
	}
`;

function Header() {
  return (
    <div className="headerArea">
		<InnerLayout>
            <Link to={`/`} className="logoEbay">ebay쇼핑</Link>
            {/* <div className="searchArea"></div>
            <div className="headerMenu">
                <div className="btnMyShop">
                    <a href="#">마이쇼핑</a>
                </div>
                <div className="btnOrder">
                    <a href="#">주문배송</a>
                </div>
                <div className="btnCart">
                    <a href="#">장바구니</a>
                    <span className="countNum">0</span>
                </div>
            </div> */}
            <Menu getUrl='https://baekcode.github.io/APIs/menu.json'></Menu>
		</InnerLayout>
    </div>
  );
}

export default Header;
