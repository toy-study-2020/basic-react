import React, { useEffect, useState } from 'react';
import {
  BestHotdealArea,
  InnerLayout,
  AreaTitle,
  LstBest,
  LstBestItem,
  ItemBest,
  PrdFlag,
  Flag,
  Num,
  PrdThumb,
  Img,
  PrdInfo,
  SimpleTit,
  Price,
  Original,
  Sale
} from './BestStyle';

const BestContainer = ({getUrl}) => {
  const [bestTitle, setBestTitle] = useState('');
  const [bestItems, setBestItems] = useState([]);
 
  useEffect(() => {
    fetch(getUrl)
      .then(res => res.json())
      .then(success => {
        setBestTitle(success.mainBest.title);
        setBestItems(success.mainBest.items);
      });
  }, [getUrl]);

  const listArr = arr => {
    return arr.map((item, idx) => {
      return (
        <LstBestItem key={idx}>
          <a href="#">
            <ItemBest>
              <PrdFlag>
                <Flag percent>
                  <Num>
                    {item.labels.typeDiscountRate}
                    {item.labels.typeDiscountRate.indexOf('%') > -1 ? '' : '%'}
                  </Num>
                </Flag>
                <Flag>{item.labels.typeDiscountFee}</Flag>
              </PrdFlag>
              <PrdThumb>
                <Img src={item.imgSrc} alt={item.alt} />
              </PrdThumb>
              <PrdInfo>
                <SimpleTit>{item.name}</SimpleTit>
                <div>{item.description}</div>
                <Price>
                  {item.originalPrice !== item.salePrice ? <Original>${item.originalPrice}</Original> : ''}
                  <Sale>${item.salePrice}</Sale>
                </Price>
              </PrdInfo>
            </ItemBest>
          </a>
        </LstBestItem>
      )
    })
  };

  return (
    <BestHotdealArea>
      <InnerLayout>
        <AreaTitle>{bestTitle}</AreaTitle>
        <LstBest>
          {listArr(bestItems)}
        </LstBest>
      </InnerLayout>
    </BestHotdealArea>
  );
}

export default BestContainer;
