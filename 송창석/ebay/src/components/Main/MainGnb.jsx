import React, { useEffect, useState } from 'react';
import { MainGnbStyles } from './MainContStyles';
import { ListColStyles } from '../../GlobalStyles'

const MainGnb = ({ IntervalSection, fetchItem }) => {
    const [mainMenu, setMainMenu] = useState([]);
    const [mainSide, setMainSide] = useState([]);
    
    useEffect(() => {
        fetchItem.then(data => {
            setMainMenu(data.mainMenu)
            setMainSide(data.sideMenu)
        })
    });
    
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