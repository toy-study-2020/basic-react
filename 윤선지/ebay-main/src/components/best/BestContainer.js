import React, { useEffect, useState } from 'react';
import { getFetch } from '../../utils/utils';
import BestPresenter from './BestPresenter';
export const DataConText = React.createContext();

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
      <DataConText.Provider value={{bestItems, bestTitle}}>
         <BestPresenter></BestPresenter>
      </DataConText.Provider>
    );
}

export default BestContainer;
