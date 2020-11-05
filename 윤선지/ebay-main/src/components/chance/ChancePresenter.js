import React, { useContext } from 'react';
import Item from './ChanceItem';
import { DataConText } from './ChanceContainer';
import {
	InnerLayout,
	AreaTitle,
	LstChance
} from './ChanceStyle';

const ChancePresenter = () => {
	const { chanceTitle, chanceItems } = useContext(DataConText);
	return (
		<section>
			<InnerLayout>
				<AreaTitle>{chanceTitle}</AreaTitle>
				<LstChance>
					{chanceItems.map((item, idx) => <Item item={item} idx={idx}></Item>)}
				</LstChance>
		</InnerLayout>
		</section>
	);
}

export default ChancePresenter;
