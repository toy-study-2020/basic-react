import React from 'react';

const FormSelect = ({name, options, value, onChangeFormHandler}) => {
    return (
        <select
        id={name}
        name={name}
        value={value}
        onChange={onChangeFormHandler}
        >
            <option value={""} defaultValue>선택</option>
            {options()}
        </select>
    );
};

export default FormSelect;