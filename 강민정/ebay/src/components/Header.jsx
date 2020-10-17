import React from 'react';

const Header = ({Link}) => {
  return (
    <>
      <header>
        <div className="headerTop">
          <div className="loginStatus">
            <Link to="/">
              <a href="#" className="logoAuction" aria-label="옥션으로 이동">AUCTION</a>
            </Link>
            <ul className="loginList">
              <li><a href="#">로그인</a></li>
              <li>
                <Link to="/join">회원가입</Link>
              </li>
              <li><a href="#">이용안내</a></li>
            </ul>
          </div>
        </div>
        <div className="search">
          <div className="searchWrapper">
            <Link to="/">
              <span className="logoEbay">ebay쇼핑</span>
            </Link>
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