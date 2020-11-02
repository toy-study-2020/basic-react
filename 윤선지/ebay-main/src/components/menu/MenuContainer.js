import React, { useEffect, useState } from 'react';
import { getFetch } from '../../utils/utils';
import MenuPresenter from './MenuPresenter';
export const DataConText = React.createContext();

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
        <DataConText.Provider value={{mainMenu, subMenu}}>
            <MenuPresenter></MenuPresenter>
        </DataConText.Provider>
    );
}

export default MenuContainer;
