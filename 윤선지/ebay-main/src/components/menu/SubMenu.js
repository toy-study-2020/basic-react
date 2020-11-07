import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceNav, LstNav, LstItem } from './MenuStyle';

function SubMenu({sideMenu}) {
  
  const listArr = arr => {
    return arr.map((item, idx) => {
      return (
        <LstItem key={idx}>
          <Link to={`/menu/${item.id}`}>{item.name}</Link>
        </LstItem>
      )
    })
  };

  return (
    <ServiceNav>
      <LstNav>
        {listArr(sideMenu)}
      </LstNav>
    </ServiceNav>
  );
}

export default SubMenu;
