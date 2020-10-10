import React, { useEffect, useState } from 'react';
import { CLASS_NAME } from '../../constant/constant';
import { ListColStyles } from '../../GlobalStyles';
import { MainBestStyles, MainListItemStyles } from './MainContStyles';

const MainBest = ({ IntervalSection, MainContTitle, fetchItem }) => {
    const [title, setTitle] = useState("");
    const [best, setBest] = useState([]);
    const {MAIN_BEST} = CLASS_NAME;
    const {CONT, DISCOUNT, RATE, FEE, IMG, DESC, PRICE, NOW, ORIGIN} = MAIN_BEST

    useEffect(() => {
        fetchItem.then(data => {
            setTitle(data.mainBest.title)
            setBest(data.mainBest.items)
        })
    })

    return (
        <MainBestStyles>
            <IntervalSection>
                <MainContTitle>{title}</MainContTitle>
                <ListColStyles>
                    {best.map((item => {
                        return(
                            <MainListItemStyles key={item.id}>
                                <a href={"#n"} className={CONT}>
                                    <label className={DISCOUNT}>
                                        <div className={RATE}>{item.labels.typeDiscountRate}</div>
                                        <div className={FEE}>{item.labels.typeDiscountFee}</div>
                                    </label>
                                    <div className={IMG}><img src={item.imgSrc} alt={item.alt} /></div>
                                    <div className={DESC}>
                                        <dl>
                                            <dt>{item.name}</dt>
                                            <dd>{item.description}</dd>
                                        </dl>
                                        {
                                            item.originalPrice === item.salePrice ? 
                                            <div className={PRICE}>
                                                <strong className={NOW}>{item.salePrice}</strong>
                                            </div> :
                                            <div className={PRICE}>
                                                    <span className={ORIGIN}>{item.originalPrice}</span>
                                                <strong className={NOW}>{item.salePrice}</strong>
                                            </div>
                                        }
                                    </div>
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