import React from 'react';
import Item from './StoreItem';
import {
  BrandArea,
  InnerLayout,
  AreaTitle,
  LstBrand
} from './StoreStyle';

const Store = ({mainStore}) => {
    const { title, items } = mainStore;

    return (
        <BrandArea>
            <InnerLayout>
                <AreaTitle>{title}</AreaTitle>
                <LstBrand>
                    {items.map((item, idx) => <Item item={item} idx={idx}></Item>)}
                </LstBrand>
            </InnerLayout>
        </BrandArea>
    );
}

export default Store;
