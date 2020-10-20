import React, { useEffect, useState } from 'react';
import { getFetch } from '../../utils/utils';
import ChancePresenter from './ChancePresenter';

const ChanceContainer = ({getUrl}) => {
	const [chanceTitle, setChanceTitle] = useState('');
	const [chanceItems, setChanceItems] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const data = await getFetch(getUrl);
		setChanceTitle(data.mainProducts.title);
		setChanceItems(data.mainProducts.items);
	}

	return (
		<ChancePresenter chanceTitle={chanceTitle} chanceItems={chanceItems}></ChancePresenter>
	);
}

export default ChanceContainer;
