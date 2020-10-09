import React from 'react';
import './InputText.scss';

function InputText(props) {
  return (
    <div className="inputBx">
      <label for={props.id}>
        {props.error && <span aria-label="필수" className="required">*</span>}
        {props.title}
      </label>
      <div className="inputText">
        <input type="text" id={props.id} onBlur={props.onChangeEvt} required={props.error ? true : false}></input>
      </div>
      {props.error &&
        <div className={"errorText " + (props.display ? '' : 'on')}>
          {props.error}
        </div>
      }
    </div>
  );
}

export default InputText;