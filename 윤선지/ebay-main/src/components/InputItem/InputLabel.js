import React from 'react';
import { LoginInputObj } from '../../constants/Constants';
import { Label } from './InputStyle';

function InputLabel({name, labelTitle}) {
    const { id, title, required } = LoginInputObj[name];
    const titleLabel = labelTitle ? labelTitle: title;

	return (
    <Label for={id}>
        {required && <span aria-label="필수" className="required">*</span>}
        {titleLabel}
    </Label>
	);
}

export default InputLabel;