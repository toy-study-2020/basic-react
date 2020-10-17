import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../fetch';
import { ListColStyles } from '../../styled/GlobalStyles';
import { MainStoreStyles } from '../../styled/Main/MainStoreStyles';

const MainStore = ({ IntervalSection, MainContTitle, getURL }) => {
    const [title, setTitle] = useState("");
    const [store, setStore] = useState([]);

    useEffect(() => {
        const res = fetchJson(getURL)
        res.then(data => {
            setTitle(data.mainStore.title)
            setStore(data.mainStore.items)
        })
    },[getURL]);

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