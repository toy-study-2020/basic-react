import React, { useEffect, useState } from 'react';
import { CLASS_NAME } from '../../constant/constant';
import { ListColStyles } from '../../GlobalStyles';
import { MainChanceStyles, MainListItemStyles } from './MainContStyles';

const MainChance = ({ IntervalSection, MainContTitle, fetchItem }) => {
    const [title, setTitle] = useState("");
    const [chance, setChance] = useState([]);
    const {MAIN_CHANCE} = CLASS_NAME;
    const {CONT, IMG, DESC, BADGE} = MAIN_CHANCE;

    useEffect(() => {
        fetchItem.then(data => {
            setTitle(data.mainProducts.title)
            setChance(data.mainProducts.items)
        })
    })

    return (
        <MainChanceStyles>
            <IntervalSection>
                <MainContTitle>{title}</MainContTitle>
                <ListColStyles>
                    {chance.map((item) => {
                        return(
                            <MainListItemStyles key={item.id}>
                                <a href={"#n"} className={CONT}>
                                    <div className={IMG}><img src={item.imgSrc} alt={item.alt} /></div>
                                    <div className={DESC}>
                                        <dl>
                                            <dt>
                                                {
                                                    item.originalPrice === item.salePrice ? <strong>{item.salePrice}</strong> : <strong>{item.salePrice}<small>{item.originalPrice}</small></strong>
                                                }
                                            </dt>
                                            <dd>{item.name}</dd>
                                            <dd className={BADGE}>
                                                {item.badge.map((it, index) => <em key={index}>{it}</em>)}
                                            </dd>
                                        </dl>
                                        
                                    </div>
                                </a>
                            </MainListItemStyles>
                        )
                    })}
                </ListColStyles>
            </IntervalSection>
        </MainChanceStyles>
    );
};

export default MainChance;