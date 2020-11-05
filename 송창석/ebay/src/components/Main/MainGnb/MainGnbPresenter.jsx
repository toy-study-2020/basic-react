import React from 'react';
import { IntervalSection, ListColStyles } from '../../../GlobalStyles';
import { MainGnbStyles } from './MainGnbStyles';

const MainGnbPresenter = ({main, side}) => {
    return (
        <MainGnbStyles>
            <IntervalSection>
                <ListColStyles>
                    {
                        main.map(item => {
                            return (
                                <li key={item.id}><a href={item.url}>{item.name}</a></li>
                            )
                        })
                    }
                </ListColStyles>
                <ListColStyles>
                    {
                        side.map(item => {
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

export default MainGnbPresenter;