import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className="headerArea">
		<div className="innerLayout">
            <Link to={`/`} className="logoEbay">ebay쇼핑</Link>
            <div className="searchArea"></div>
            <div className="headerMenu">
                <div className="menu btnMyShop">
                    <a href="#">마이쇼핑</a>
                </div>
                <div className="menu btnOrder">
                    <a href="#">주문배송</a>
                </div>
                <div className="menu btnCart">
                    <a href="#">장바구니</a>
                    <span className="countNum">0</span>
                </div>
            </div>
		</div>
    </div>
  );
}

export default Header;
