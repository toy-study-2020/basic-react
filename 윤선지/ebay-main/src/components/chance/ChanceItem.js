import React from 'react';
import {Link} from 'react-router-dom';
import {
	LiChance,
	ItemChance,
	ThumbImg,
	Img,
	ItemInfo,
	Name,
	Price,
	Original,
	Sale,
	ItemBadge,
	BadgeArea
} from './ChanceStyle';

const ChanceItem = ({item, idx}) => {
    const {badge, imgSrc, alt, name, originalPrice, salePrice} = item;
    return (
        <LiChance key={idx}>
            <Link>
                <ItemChance>
                    <BadgeArea>
                        {badge.map(badge => <ItemBadge>{badge}</ItemBadge>)}
                    </BadgeArea>
                    <ThumbImg>
                        <Img src={imgSrc} alt={alt} />
                    </ThumbImg>
                    <ItemInfo>
                        <Name>{name}</Name>
                        <Price>
                            {originalPrice !== salePrice ? <Original>${originalPrice}</Original> : ''}
                            <Sale>${salePrice}</Sale>
                        </Price>
                    </ItemInfo>
                </ItemChance>
            </Link>
        </LiChance>
    )
}

export default ChanceItem;
