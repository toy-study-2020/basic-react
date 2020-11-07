import React from 'react';
import {LoginInputObj} from '../../constants/Constants';
import {InputSelectArea, InputSelectUnit} from './InputStyle';
import './InputText.scss';

function InputSelect({name, onChangeEvt, display}) {
    const {id, title, valueArr, error} = LoginInputObj[name];

    const optionListReturn = options => {
        return options.map((option, idx) => {
            return (
                <option key={idx} val={option}>{option}</option>
            );
        });
    };

    return (
        <InputSelectArea>
            <InputSelectUnit id={id} onBlur={onChangeEvt} aria-label={title}>
                <option value="" defaultValue>입력</option>
                {optionListReturn(valueArr)}
            </InputSelectUnit>

            {error && 
				<div className={"errorText " + (display ? '' : 'on')}>
					{error}
            	</div>
			}
        </InputSelectArea>
    );
}

export default InputSelect;