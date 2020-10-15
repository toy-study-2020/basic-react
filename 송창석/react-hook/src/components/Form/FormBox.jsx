import React from 'react';

const FormBox = ({label, FormComponent}) => {
    return (
        <div>
            <label>{label}</label>
            {FormComponent}
        </div>
    );
};

export default FormBox;