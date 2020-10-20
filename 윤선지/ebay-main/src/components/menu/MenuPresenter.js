import React from 'react';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';
import { InnerLayout } from './MenuStyle';

const MenuPresenter = ({mainMenu, subMenu}) => {
  return (
    <div>
      <InnerLayout>
        <MainMenu items={mainMenu}></MainMenu>
        <SubMenu items={subMenu}></SubMenu>
      </InnerLayout>
    </div>
  );
}

export default MenuPresenter;
