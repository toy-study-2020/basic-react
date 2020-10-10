import React from 'react';

const FormInput = ({name, type, value, handleUserValue}) => {
    
    return (
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={handleUserValue}
        />
    );
};

export default FormInput;