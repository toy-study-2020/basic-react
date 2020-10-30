import React, {useContext} from 'react';
import Item from './BestItem';
import { DataConText } from './BestContainer';

import {
    BestHotdealArea,
    InnerLayout,
    AreaTitle,
    LstBest
} from './BestStyle';

const SearchPresenter = () => {
    const { bestItems, bestTitle } = useContext(DataConText);
    return (
        <BestHotdealArea>
            <InnerLayout>
                <AreaTitle>{bestTitle}</AreaTitle>
                <LstBest>
                    {bestItems.map((item, idx) => <Item idx={idx} item={item}></Item>)}
                </LstBest>
            </InnerLayout>
        </BestHotdealArea>
    );
}

export default SearchPresenter;
