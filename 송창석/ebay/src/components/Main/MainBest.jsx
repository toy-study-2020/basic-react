import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../fetch';
import { ListColStyles } from '../../styled/GlobalStyles';
import { MainItemDescStyles, MainListItemStyles } from '../../styled/Main/MainContStyles';
// import { 
//     BestDiscountStyles,
//     MainBestStyles,
//     DiscountRateStyles,
//     DiscountFeeStyles,
//     BestImgStyles,
//     BestPriceStyles,
//     PriceNowStyles,
//     PriceOriginStyles
// } from '../../styled/Main/MainBestStyles';
import * as MainBestStyledComponents from '../../styled/Main/MainBestStyles';

const MainBest = ({ IntervalSection, MainContTitle, getURL }) => {
    const [title, setTitle] = useState("");
    const [best, setBest] = useState([]);
    const {BestDiscountStyles, MainBestStyles, DiscountRateStyles, DiscountFeeStyles, BestImgStyles, BestPriceStyles, PriceNowStyles, PriceOriginStyles} = MainBestStyledComponents

    useEffect(() => {
        const res = fetchJson(getURL)
        res.then(data => {
            setTitle(data.mainBest.title)
            setBest(data.mainBest.items)
        })
    },[getURL]);

    return (
        <MainBestStyles>
            <IntervalSection>
                <MainContTitle>{title}</MainContTitle>
                <ListColStyles>
                    {best.map((item => {
                        return(
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

export default MainBest;