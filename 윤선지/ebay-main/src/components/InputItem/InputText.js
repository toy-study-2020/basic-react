import React from 'react';
import { LoginInputObj } from '../../constants/Constants';
import { InputTextArea, InputTextUnit } from './InputStyle';

function InputText({name, onChangeEvt, display}) {
    const { id, error, required } = LoginInputObj[name];

    return (
     <>
        <InputTextArea>
            <InputTextUnit type="text" id={id} onBlur={onChangeEvt} required={required ? true : false}></InputTextUnit>
        </InputTextArea>
        {error &&
            <div className={"errorText " + (display ? '' : 'on')}>
               {error}
            </div>
        }
    </>
    );
}

export default InputText;