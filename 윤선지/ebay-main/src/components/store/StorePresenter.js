import React from 'react';
import Item from './StoreItem';
import {
  BrandArea,
  InnerLayout,
  AreaTitle,
  LstBrand
} from './StoreStyle';

const MenuPresenter = ({storeTitle, storeItems}) => {
    return (
        <BrandArea>
            <InnerLayout>
                <AreaTitle>{storeTitle}</AreaTitle>
                <LstBrand>
                    {storeItems.map((item, idx) => <Item item={item} idx={idx}></Item>)}
                </LstBrand>
            </InnerLayout>
        </BrandArea>
    );
}

export default MenuPresenter;
