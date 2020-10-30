import React, { useContext } from 'react';
import { DataConText } from './LoginContainer';
import './InputText.scss';

function InputSelect({id, title, arr, error, display}) {
	const { onChangeEvt } = useContext(DataConText);

	const optionListReturn = options => {
		return options.map((option, idx) => {
			return (
				<option key={idx} val={option}>{option}</option>            
			);
		});
	};
	
	return (
		<div className="inputSelect">
			<select id={id} onBlur={onChangeEvt} aria-label={title}>
				<option value="" defaultValue>입력</option>
				{optionListReturn(arr)}
			</select>

			{error &&
				<div className={"errorText " + (display ? '' : 'on')}>	
					{error}
				</div>
			}
		</div>
	);
}

export default InputSelect;