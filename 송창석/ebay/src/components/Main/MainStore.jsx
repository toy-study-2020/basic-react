import React, { useEffect, useState } from 'react';
import { MainStoreStyles } from './MainContStyles';
import { ListColStyles } from '../../GlobalStyles';

const MainStore = ({ IntervalSection, MainContTitle, fetchItem }) => {
    const [title, setTitle] = useState("");
    const [store, setStore] = useState([]);

    useEffect(() => {
        fetchItem.then(data => {
            setTitle(data.mainStore.title)
            setStore(data.mainStore.items)
        })
    })

    return (
        <MainStoreStyles>
            <IntervalSection>
                <MainContTitle>{title}</MainContTitle>
                <ListColStyles>
                    {store.map((item, index) => {
                        return(
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

export default MainStore;