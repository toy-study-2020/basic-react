import React from 'react';

const Header = () => {
  return (
    <>
      <header>
        <div className="headerTop">
          <div className="loginStatus">
            <a href="#" className="logoAuction" aria-label="옥션으로 이동">AUCTION</a>
            <ul className="loginList">
              <li><a href="#">로그인</a></li>
              <li><a href="#">회원가입</a></li>
              <li><a href="#">이용안내</a></li>
            </ul>
          </div>
        </div>
        <div className="search">
          <div className="searchWrapper">
            <a href="#" className="logoEbay">ebay쇼핑</a>
            <div className="searchForm">
              <form method="get" action="">
                <label htmlFor="inputSearch">
                  <input type="search" id="inputSearch" placeholder="검색어를 입력하세요." autoComplete="off"/>
                </label>
                <button type="submit" className="buttonSearch">검색</button>
                <div className="searchListWrap">
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}


export default Header;