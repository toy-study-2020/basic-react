import React from 'react';

const Header = () => {
    return (
        <div>
            <a href="#" className="logo--ebay">ebay쇼핑</a>
            <div className="search">
                <form action="" id="search-form">
                <input
                type="text"
                id="search-input"
                role="combobox"
                aria-expanded="false"
                placeholder="한글, 영어, 상품번호로 검색하세요."
                autocomplete="off"
                aria-autocomplete="both"
                aria-owns="recommend-keyword__lists"
                aria-activedescendant=""/>
                <button type="button" className="search__btn">검색하기</button>
                <div className="recommend-keyword hidden">
                    <ul id="recommend-keyword__lists" role="listbox"></ul>
                    <div className="recommend-keyword__footer">
                    <button type="button" className="close__btn">닫기 X</button>
                    </div>
                </div>
                </form>
            </div>
            </div>
    );
};

export default Header;