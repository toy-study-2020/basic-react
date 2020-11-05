import React from 'react';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';
import { InnerLayout } from './MenuStyle';

const MenuPresenter = () => {
  return (
    <div>
      <InnerLayout>
        <MainMenu></MainMenu>
        <SubMenu></SubMenu>
      </InnerLayout>
    </div>
  );
}

export default MenuPresenter;
