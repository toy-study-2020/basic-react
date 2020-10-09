import React from 'react';
import './InputText.scss';

function InputSelect(props) {
	const optionListReturn = options => {
		return options.map((option, idx) => {
			return (
				<option key={idx} val={option}>{option}</option>            
			);
		});
	};
	
	return (
		<div className="inputSelect">
			<select id={props.id} onBlur={props.onChangeEvt} aria-label={props.title}>
				<option value="" defaultValue>입력</option>
				{optionListReturn(props.arr)}
			</select>

			{props.error &&
				<div className={"errorText " + (props.display ? '' : 'on')}>	
					{props.error}
				</div>
			}
		</div>
	);
}

export default InputSelect;