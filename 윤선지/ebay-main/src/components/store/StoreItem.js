import React from 'react';
import { Link } from 'react-router-dom';
import {
  LstBrandItem,
  ThumbImg,
  Img,
  Name
} from './StoreStyle';

const StoreItem = ({item, idx}) => {
    const {imgSrc, imgAlt} = item;

    return (
        <LstBrandItem key={idx}>
            <Link>
                <ThumbImg>
                    <Img src={imgSrc} alt=""/>
                </ThumbImg>
                <Name>{imgAlt}</Name>
            </Link>
        </LstBrandItem>
    )
}

export default StoreItem;
