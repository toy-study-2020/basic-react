import React from 'react';
import { fetchJson } from '../../fetch'
import { IntervalSection } from '../../GlobalStyles';
import { MainWrapStyles, MainContTitle } from './MainContStyles';
import MainGnb from './MainGnb';
import MainStore from './MainStore';
import MainBest from './MainBest';
import MainEvent from './MainEvent';
import MainChance from './MainChance';

const MainWrap = () => {
    
    return (
        <MainWrapStyles>
            <MainGnb
                IntervalSection={IntervalSection}
                fetchItem={fetchJson("menu")}
            />
            <MainStore
                IntervalSection={IntervalSection}
                MainContTitle={MainContTitle}
                fetchItem={fetchJson("mainStore")}
            />
            <MainBest
                IntervalSection={IntervalSection}
                MainContTitle={MainContTitle}
                fetchItem={fetchJson("mainBest")}
            />
            <MainEvent
                IntervalSection={IntervalSection}
                MainContTitle={MainContTitle}
                fetchItem={fetchJson("mainEvent")}
            />
            <MainChance
                IntervalSection={IntervalSection}
                MainContTitle={MainContTitle}
                fetchItem={fetchJson("mainProducts")}
            />
        </MainWrapStyles>
    );
};

export default MainWrap;