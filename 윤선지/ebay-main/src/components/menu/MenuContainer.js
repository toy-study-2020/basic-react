import React, { useEffect, useState } from 'react';
import { getFetch } from '../../utils/utils';
import MenuPresenter from './MenuPresenter';

const MenuContainer = ({getUrl}) => {
    const [mainMenu, setMainMenu] = useState([]);
    const [subMenu, setSubMenu] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getFetch(getUrl);
        setMainMenu(data.mainMenu);
        setSubMenu(data.sideMenu);
    }

    return (
        <MenuPresenter mainMenu={mainMenu} subMenu={subMenu}></MenuPresenter>
    );
}

export default MenuContainer;
