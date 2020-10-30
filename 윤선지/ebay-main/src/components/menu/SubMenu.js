import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServiceNav, LstNav, LstItem } from './MenuStyle';
import { DataConText } from './MenuContainer';

function SubMenu({items}) {
  const { subMenu } = useContext(DataConText);
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
        {listArr(subMenu)}
      </LstNav>
    </ServiceNav>
  );
}

export default SubMenu;
