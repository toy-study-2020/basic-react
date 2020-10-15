import React from 'react';

const FormInput = ({name, type, value, onChangeFormHandler}) => {
    return (
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChangeFormHandler}
        />
    );
};

export default FormInput;