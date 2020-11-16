import React from 'react';

const FormInput = ({name, type, value, changeValuesHandler}) => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={changeValuesHandler}
    />
  );
};

export default FormInput;