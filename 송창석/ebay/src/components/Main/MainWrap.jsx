import React from 'react';
import { MAIN_APIS } from '../../constant/constant';
import { IntervalSection } from '../../styled/GlobalStyles';
import { MainWrapStyles, MainContTitle } from '../../styled/Main/MainContStyles';
import MainGnb from './MainGnb';
import MainStore from './MainStore';
import MainBest from './MainBest';
import MainEvent from './MainEvent';
import MainChance from './MainChance';

const MainWrap = () => {
    const {MENU, STORE, BEST, EVENT, CHANCE} = MAIN_APIS;
    
    return (
        <MainWrapStyles>
            <MainGnb
                IntervalSection={IntervalSection}
                getURL={MENU}
            />
            <MainStore
                IntervalSection={IntervalSection}
                MainContTitle={MainContTitle}
                getURL={STORE}
            />
            <MainBest
                IntervalSection={IntervalSection}
                MainContTitle={MainContTitle}
                getURL={BEST}
            />
            <MainEvent
                IntervalSection={IntervalSection}
                MainContTitle={MainContTitle}
                getURL={EVENT}
            />
            <MainChance
                IntervalSection={IntervalSection}
                MainContTitle={MainContTitle}
                getURL={CHANCE}
            />
        </MainWrapStyles>
    );
};

export default MainWrap;