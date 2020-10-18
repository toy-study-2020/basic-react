import React from 'react';
import { ServiceNav, LstNav, LstItem } from './MenuStyle';

function SubMenu({items}) {
  const listArr = arr => {
    return arr.map((item, idx) => {
      return (
        <LstItem key={idx}>
          <a href="#" id="{item.id}">{item.name}</a>
        </LstItem>
      )
    })
  };

  return (
    <ServiceNav>
      <LstNav>
        {listArr(items)}
      </LstNav>
    </ServiceNav>
  );
}

export default SubMenu;
