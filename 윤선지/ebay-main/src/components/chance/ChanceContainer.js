import React, { useEffect, useState } from 'react';
import { getFetch } from '../../utils/utils';
import ChancePresenter from './ChancePresenter';
export const DataConText = React.createContext();

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
		<DataConText.Provider value={{chanceTitle, chanceItems}}>
			<ChancePresenter chanceTitle={chanceTitle} chanceItems={chanceItems}></ChancePresenter>
		</DataConText.Provider>
	);
}

export default ChanceContainer;
