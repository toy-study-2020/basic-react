import React from 'react';
import Item from './ChanceItem';
import {
	InnerLayout,
	AreaTitle,
	LstChance
} from './ChanceStyle';

const ChancePresenter = ({chanceTitle, chanceItems}) => {
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
