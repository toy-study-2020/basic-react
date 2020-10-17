import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../fetch';
import { MainGnbStyles } from '../../styled/Main/MainGnbStyles';
import { ListColStyles } from '../../styled/GlobalStyles';


const MainGnb = ({ IntervalSection, getURL }) => {
    const [mainMenu, setMainMenu] = useState([]);
    const [mainSide, setMainSide] = useState([]);
        
    useEffect(() => {
        const res = fetchJson(getURL)
        res.then(data => {
            setMainMenu(data.mainMenu)
            setMainSide(data.sideMenu)
        })
    },[getURL]);
    
    return (
        <MainGnbStyles>
            <IntervalSection>
                <ListColStyles>
                    {
                        mainMenu.map(item => {
                            return (
                                <li key={item.id}><a href={item.url}>{item.name}</a></li>
                            )
                        })
                    }
                </ListColStyles>
                <ListColStyles>
                    {
                        mainSide.map(item => {
                            return (
                                <li key={item.id}><a href={item.url}>{item.name}</a></li>
                            )
                        })
                    }
                </ListColStyles>
            </IntervalSection>
        </MainGnbStyles>
    );
};

export default MainGnb;