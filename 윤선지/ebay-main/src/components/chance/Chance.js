import React from 'react';
import Item from './ChanceItem';
import {
	InnerLayout,
	AreaTitle,
	LstChance
} from './ChanceStyle';

const Chance = ({mainProducts}) => {
	const {title, items} = mainProducts;
	
	return (
		<section>
			<InnerLayout>
				<AreaTitle>{title}</AreaTitle>
				<LstChance>
					{items.map((item, idx) => <Item item={item} idx={idx}></Item>)}
				</LstChance>
		</InnerLayout>
		</section>
	);
}

export default Chance;
