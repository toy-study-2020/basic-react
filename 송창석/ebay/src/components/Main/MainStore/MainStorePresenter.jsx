import React from 'react';
import { MainContTitle } from '../../../routes/Main/MainContStyles';
import { IntervalSection, ListColStyles } from '../../../GlobalStyles';
import { MainStoreStyles } from './MainStoreStyles';

const MainStorePresenter = ({title, items}) => {
    return (
        <MainStoreStyles>
            <IntervalSection>
                <MainContTitle>{title}</MainContTitle>
                <ListColStyles>
                    {items.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={"#n"}>
                                    <div><img src={item.imgSrc} alt={item.imgAlt}></img></div>
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        )
                    })}
                </ListColStyles>
            </IntervalSection>
        </MainStoreStyles>
    );
};

export default MainStorePresenter;