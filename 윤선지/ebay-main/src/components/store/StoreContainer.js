import React, { useEffect, useState } from 'react';
import {
  BrandArea,
  InnerLayout,
  AreaTitle,
  LstBrand,
  LstBrandItem,
  ThumbImg,
  Img,
  Name
} from './StoreStyle';

const MenuContainer = ({getUrl}) => {
  const [storeTitle, setStoreTitle] = useState('');
  const [storeItems, setStoreItems] = useState([]);
 
  useEffect(() => {
    fetch(getUrl)
      .then(res => res.json())
      .then(success => {
        setStoreTitle(success.mainStore.title);
        setStoreItems(success.mainStore.items);
      });
  }, [getUrl]);

  const listArr = arr => {
    return arr.map((item, idx) => {
      return (
        <LstBrandItem key={idx}>
          <a href="#">
            <ThumbImg>
              <Img src={item.imgSrc} alt=""/>
            </ThumbImg>
            <Name>{item.imgAlt}</Name>
          </a>
        </LstBrandItem>
      )
    })
  };

  return (
    <BrandArea>
      <InnerLayout>
        <AreaTitle>{storeTitle}</AreaTitle>
        <LstBrand>
          {listArr(storeItems)}
        </LstBrand>
      </InnerLayout>
    </BrandArea>
  );
}

export default MenuContainer;
