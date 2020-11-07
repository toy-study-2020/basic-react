import React, { useContext } from 'react';
import { MainConText } from '../../App';

import Menu from "../../components/Menu";
import Store from '../../components/Store';
import Best from '../../components/Best';
import Chance from '../../components/Chance';
// import Slider from "../../components/Slider/index";

const ChancePresenter = () => {
    const { menu, mainStore, mainBest, mainProducts, mainSlider } = useContext(MainConText);
    
	return (
		<>
            <Menu menu={menu}></Menu>
            {/* <Slider mainSlider={mainSlider}></Slider> */}
            <Store mainStore={mainStore}></Store>
            <Best mainBest={mainBest}></Best>
            <Chance mainProducts={mainProducts}></Chance>
		</>
	);
}

export default ChancePresenter;
