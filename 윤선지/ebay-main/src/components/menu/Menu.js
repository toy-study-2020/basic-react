import React from 'react';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';
import { InnerLayout } from './MenuStyle';

const Menu = ({menu}) => {
  const {mainMenu, sideMenu} = menu;

  return (
    <div>
      <InnerLayout>
        <MainMenu mainMenu={mainMenu}></MainMenu>
        <SubMenu sideMenu={sideMenu}></SubMenu>
      </InnerLayout>
    </div>
  );
}

export default Menu;
