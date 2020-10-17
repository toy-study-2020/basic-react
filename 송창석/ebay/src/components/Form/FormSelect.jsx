import React from 'react';

const FormSelect = ({name, callback, value, handleUserValue}) => {
    
    return (
        <select
            id={name}
            name={name}
            value={value}
            onChange={handleUserValue}
        >
            <option value={""} defaultValue>선택</option>
            {callback()}
        </select>
    );
};

export default FormSelect;