import React from 'react';
import {Link} from 'react-router-dom';
import {
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

const BestItem = ({item, idx}) => {
    const {typeDiscountRate, typeDiscountFee} = item.labels;
    const {imgSrc, alt, name, description, originalPrice, salePrice} = item;

    return (
    <LstBestItem key={idx}>
        <Link>
            <ItemBest>
                <PrdFlag>
                <Flag percent>
                    <Num>
                        {typeDiscountRate}
                        {typeDiscountRate.indexOf('%') > -1 ? '' : '%'}
                    </Num>
                </Flag>
                <Flag>{typeDiscountFee}</Flag>
                </PrdFlag>
                <PrdThumb>
                    <Img src={imgSrc} alt={alt} />
                </PrdThumb>
                <PrdInfo>
                    <SimpleTit>{name}</SimpleTit>
                    <div>{description}</div>
                    <Price>
                        {originalPrice !== salePrice ? <Original>${originalPrice}</Original> : ''}
                        <Sale>${salePrice}</Sale>
                    </Price>
                </PrdInfo>
            </ItemBest>
        </Link> 
    </LstBestItem>
    )
}

export default BestItem;
