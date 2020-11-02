import React, { useEffect, useState } from 'react';
import { getFetch } from '../../utils/utils';
import StorePresenter from './StorePresenter';

const StoreContainer = ({getUrl}) => {
    const [storeTitle, setStoreTitle] = useState('');
    const [storeItems, setStoreItems] = useState([]);
    
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getFetch(getUrl);
        setStoreTitle(data.mainStore.title);
        setStoreItems(data.mainStore.items);
    }

    return (
        <StorePresenter storeTitle={storeTitle} storeItems={storeItems}></StorePresenter>
    );
}

export default StoreContainer;
