import React from 'react';
import MainBestIndex from '../../components/Main/MainBest/MainBestIndex';
import MainEventIndex from '../../components/Main/MainEvent/MainEventIndex';
import MainGnbIndex from '../../components/Main/MainGnb/MainGnbIndex';
import MainProductsIndex from '../../components/Main/MainProducts/MainProductsIndex';
import MainStoreIndex from '../../components/Main/MainStore/MainStoreIndex';
import { MainWrapStyles } from './MainContStyles';

const MainPresenter = () => {
    
    return (
        <MainWrapStyles>
            <MainGnbIndex/>
            <MainStoreIndex/>
            <MainBestIndex/>
            <MainEventIndex/>
            <MainProductsIndex/>
        </MainWrapStyles>
    );
};

export default MainPresenter;