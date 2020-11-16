import React from 'react';
import { MainContTitle, MainImgStyles, MainItemDescStyles, MainListItemStyles } from '../../../routes/Main/MainContStyles';
import { IntervalSection, ListColStyles } from '../../../GlobalStyles';
import { ChanceBadgeStyles, ChanceDescItemStyles, MainChanceStyles } from './ProductsStyles';

const ProductsPresenter = ({title, items}) => {
  return (
    <MainChanceStyles>
      <IntervalSection>
        <MainContTitle>{title}</MainContTitle>
        <ListColStyles>
          {items.map((item) => {
            return (
              <MainListItemStyles key={item.id}>
                <a href={"#n"}>
                  <MainImgStyles><img src={item.imgSrc} alt={item.alt} /></MainImgStyles>
                  <MainItemDescStyles>
                    <ChanceDescItemStyles>
                      <dt>
                        {
                          item.originalPrice === item.salePrice ?
                          <strong>{item.salePrice}</strong> :
                          <strong>{item.salePrice}<small>{item.originalPrice}</small></strong>
                        }
                      </dt>
                      <dd>{item.name}</dd>
                      <ChanceBadgeStyles>
                        {item.badge.map((it, index) => <em key={index}>{it}</em>)}
                      </ChanceBadgeStyles>
                    </ChanceDescItemStyles>
                  </MainItemDescStyles>
                </a>
              </MainListItemStyles>
            )
          })}
        </ListColStyles>
      </IntervalSection>
    </MainChanceStyles>
  );
};

export default ProductsPresenter;