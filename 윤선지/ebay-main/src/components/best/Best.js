import React from 'react';
import Item from './BestItem';

import {
    BestHotdealArea,
    InnerLayout,
    AreaTitle,
    LstBest
} from './BestStyle';

const Best = ({mainBest}) => {
    const {title, items} = mainBest;

    return (
        <BestHotdealArea>
            <InnerLayout>
                <AreaTitle>{title}</AreaTitle>
                <LstBest>
                    {items.map((item, idx) => <Item idx={idx} item={item}></Item>)}
                </LstBest>
            </InnerLayout>
        </BestHotdealArea>
    );
}

export default Best;
