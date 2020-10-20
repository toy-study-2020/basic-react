import React, { useEffect, useState } from 'react';
import { getFetch } from '../../utils/utils';
import BestPresenter from './BestPresenter';

const BestContainer = ({getUrl}) => {
    const [bestTitle, setBestTitle] = useState('');
    const [bestItems, setBestItems] = useState([]);
  
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getFetch(getUrl);
        setBestTitle(data.mainBest.title);
        setBestItems(data.mainBest.items);
    }

    return (
      <BestPresenter bestTitle={bestTitle} bestItems={bestItems}></BestPresenter>
    );
}

export default BestContainer;
