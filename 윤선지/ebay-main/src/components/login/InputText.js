import React, { useContext } from 'react';
import { DataConText } from './LoginContainer';
import './InputText.scss';

function InputText({id, error, title, display}) {
    const { onChangeEvt } = useContext(DataConText);

    return (
        <div className="inputBx">
        <label for={id}>
            {error && <span aria-label="필수" className="required">*</span>}
            {title}
        </label>
        <div className="inputText">
            <input type="text" id={id} onBlur={onChangeEvt} required={error ? true : false}></input>
        </div>
        {error &&
            <div className={"errorText " + (display ? '' : 'on')}>
            {error}
            </div>
        }
        </div>
    );
}

export default InputText;