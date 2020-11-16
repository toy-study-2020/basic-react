import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {UseAPI} from "../../routes/Main/MainContainer";

const Category = () => {
  const {menu} = useContext(UseAPI);
  const {mainMenu, sideMenu} = menu;
  return (
    <>
      <div className="category-wrapper">
        <div className="category-list">
          <ul className="category-best">
            {mainMenu && mainMenu.map((item, index) =>
              <li className="category-list" key={index}>
                <Link to="/">
                  <strong>{item.name}</strong>
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="category-list">
          <ul className="category-sub">
            {sideMenu && sideMenu.map((item, index) =>
              <li className="category-list" key={index}>
                <Link to="/">
                  <strong>{item.name}</strong>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Category;