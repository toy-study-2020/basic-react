import React from 'react';
import './InputText.scss';

function InputLabel(props) {
  return (
    <>
      <label for={props.id}>
        {props.required && <span aria-label="필수" className="required">*</span>}
        {props.title}
      </label>
    </>
  );
}

export default InputLabel;