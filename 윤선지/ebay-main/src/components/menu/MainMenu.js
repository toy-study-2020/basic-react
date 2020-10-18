import React from 'react';
import { Link } from 'react-router-dom';
import { MainNav, LstNav, LstItem } from './MenuStyle';

function MainMenu({items}) {
  const listMainMenu = menu => {
    return menu.map((item, idx) => {
      return (
        <LstItem key={idx}>
          <Link to={`/menu/${item.id}`}>{item.name}</Link>
        </LstItem>
      )
    })
  };

  return (
    <MainNav>
			<LstNav>
				{listMainMenu(items)}
			</LstNav>
		</MainNav>
  );
}

export default MainMenu;
