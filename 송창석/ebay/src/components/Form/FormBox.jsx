import React from 'react';
import { FormBoxStyles } from './FormStyles';

const FormBox = ({ label, components }) => {
    
    return (
        <FormBoxStyles>
            <label>{label}</label>
            <div>{components}</div>
        </FormBoxStyles>
    );
};

export default FormBox;