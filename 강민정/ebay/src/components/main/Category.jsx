import React, {useState, useEffect} from 'react';
import LoadData from "../../action/LoadData";

const Category = ({PATH}) => {
  const [gnb, setGnb] = useState({});
  const renderCategory = () => {
    LoadData(PATH, 'menu').then(data => {
      setGnb({
        ...gnb,
        mainMenu: data.mainMenu,
        sideMenu: data.sideMenu
      });
    });
  };

  const {mainMenu, sideMenu} = gnb;

  useEffect(() => {
    renderCategory();
  }, []);

  return (
    <>
      <div className="category-wrapper">
        <div className="category-list">
          <ul className="category-best">
            {mainMenu && mainMenu.map((item, index) =>
              <li className="category-list" key={index}>
                <a href="#">
                  <strong>{item.name}</strong>
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="category-list">
          <ul className="category-sub">
            {sideMenu && sideMenu.map((item, index) =>
              <li className="category-list" key={index}>
                <a href="#">
                  <strong>{item.name}</strong>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Category;