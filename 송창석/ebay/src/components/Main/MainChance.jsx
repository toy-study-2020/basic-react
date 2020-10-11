import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../fetch';
import { ListColStyles } from '../../styled/GlobalStyles';
import { ChanceBadgeStyles, ChanceDescItemStyles, MainChanceStyles } from '../../styled/Main/MainChanceStyles';
import { MainImgStyles, MainItemDescStyles, MainListItemStyles } from '../../styled/Main/MainContStyles';

const MainChance = ({ IntervalSection, MainContTitle, getURL }) => {
    const [title, setTitle] = useState("");
    const [chance, setChance] = useState([]);

    useEffect(() => {
        const res = fetchJson(getURL)
        res.then(data => {
            setTitle(data.mainProducts.title)
            setChance(data.mainProducts.items)
        })
    },[getURL]);

    return (
        <MainChanceStyles>
            <IntervalSection>
                <MainContTitle>{title}</MainContTitle>
                <ListColStyles>
                    {chance.map((item) => {
                        return(
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

export default MainChance;