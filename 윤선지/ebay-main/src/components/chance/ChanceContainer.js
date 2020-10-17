import React, { useEffect, useState } from 'react';
import {
	InnerLayout,
	AreaTitle,
	LstChance,
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

const ChanceContainer = ({getUrl}) => {
  const [chanceTitle, setChanceTitle] = useState('');
  const [chanceItems, setChanceItems] = useState([]);
 
  useEffect(() => {
    fetch(getUrl)
      .then(res => res.json())
      .then(success => {
        setChanceTitle(success.mainProducts.title);
        setChanceItems(success.mainProducts.items)
      });
	}, [getUrl]);
	
	const listArr = arr => {
    return arr.map((item, idx) => {
      return (
        <LiChance key={idx}>
					<a href="#{idx}">
						<ItemChance>
							<BadgeArea>
								{item.badge.map(badge => {
									return (
										<ItemBadge>{badge}</ItemBadge>
									);
								})}
							</BadgeArea>
							<ThumbImg>
								<Img src={item.imgSrc} alt={item.alt} />
							</ThumbImg>
							<ItemInfo>
								<Name>{item.name}</Name>
								<Price>
									{item.originalPrice !== item.salePrice ? <Original>${item.originalPrice}</Original> : ''}
									<Sale>${item.salePrice}</Sale>
								</Price>
							</ItemInfo>
						</ItemChance>
					</a>
		  	</LiChance>
      )
    })
  };

  return (
    <section>
			<InnerLayout>
					<AreaTitle>{chanceTitle}</AreaTitle>
					<LstChance>
						{listArr(chanceItems)}
					</LstChance>
      </InnerLayout>
    </section>
  );
}

export default ChanceContainer;
