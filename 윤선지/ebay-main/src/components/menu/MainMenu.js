import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainNav, LstNav, LstItem } from './MenuStyle';
import { DataConText } from './MenuContainer';

function MainMenu() {
  const { mainMenu } = useContext(DataConText);
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
				{listMainMenu(mainMenu)}
			</LstNav>
		</MainNav>
  );
}

export default MainMenu;
