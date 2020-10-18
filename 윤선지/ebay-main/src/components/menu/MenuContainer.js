import React, { useEffect, useState } from 'react';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';
import { InnerLayout } from './MenuStyle';

const MenuContainer = ({getUrl}) => {
  const [mainMenu, setMainMenu] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
 
  useEffect(() => {
    fetch(getUrl)
      .then(res => res.json())
      .then(success => {
        setMainMenu(success.mainMenu);
        setSubMenu(success.sideMenu)
      });
  }, [getUrl]);

  return (
    <div>
      <InnerLayout>
        <MainMenu items={mainMenu}></MainMenu>
        <SubMenu items={subMenu}></SubMenu>
      </InnerLayout>
    </div>
  );
}

export default MenuContainer;
