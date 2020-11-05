import React from 'react';
import { MainContTitle, MainItemDescStyles, MainListItemStyles } from '../../../routes/Main/MainContStyles';
import { IntervalSection, ListColStyles } from '../../../GlobalStyles';
import * as MainBestStyledComponents from './MainBestStyles';

const MainBestPresenter = ({title, items}) => {
    const {BestDiscountStyles, MainBestStyles, DiscountRateStyles, DiscountFeeStyles, BestImgStyles, BestPriceStyles, PriceNowStyles, PriceOriginStyles} = MainBestStyledComponents

    return (
        <MainBestStyles>
            <IntervalSection>
                <MainContTitle>{title}</MainContTitle>
                <ListColStyles>
                    {items.map((item => {
                        return (
                            <MainListItemStyles key={item.id}>
                                <a href={"#n"}>
                                    <BestDiscountStyles>
                                        <DiscountRateStyles>{item.labels.typeDiscountRate}</DiscountRateStyles>
                                        <DiscountFeeStyles>{item.labels.typeDiscountFee}</DiscountFeeStyles>
                                    </BestDiscountStyles>
                                    <BestImgStyles><img src={item.imgSrc} alt={item.alt} /></BestImgStyles>
                                    <MainItemDescStyles>
                                        <dl>
                                            <dt>{item.name}</dt>
                                            <dd>{item.description}</dd>
                                        </dl>
                                        {
                                            item.originalPrice === item.salePrice ?
                                                <BestPriceStyles>
                                                    <PriceNowStyles>{item.salePrice}</PriceNowStyles>
                                                </BestPriceStyles> :
                                                <BestPriceStyles>
                                                    <PriceOriginStyles>{item.originalPrice}</PriceOriginStyles>
                                                    <PriceNowStyles>{item.salePrice}</PriceNowStyles>
                                                </BestPriceStyles>
                                        }
                                    </MainItemDescStyles>
                                </a>
                            </MainListItemStyles>
                        )
                    }))}
                </ListColStyles>
            </IntervalSection>
        </MainBestStyles>
    );
};

export default MainBestPresenter;