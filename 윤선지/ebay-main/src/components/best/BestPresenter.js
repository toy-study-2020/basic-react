import React from 'react';
import Item from './BestItem';
import {
    BestHotdealArea,
    InnerLayout,
    AreaTitle,
    LstBest
} from './BestStyle';

const SearchPresenter = ({bestTitle, bestItems}) => {
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
