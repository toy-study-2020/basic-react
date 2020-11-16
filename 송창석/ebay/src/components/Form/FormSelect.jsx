import React from 'react';

const FormSelect = ({name, arr, value, label, changeValuesHandler}) => {
  return (
    <select
      id={name}
      name={name}
      value={value}
      onChange={changeValuesHandler}
    >
      <option value={""} defaultValue>{label}</option>
      {arr.map((opts) => {
        return <option key={opts} value={opts}>{opts}</option>
      })}
    </select>
  );
};

export default FormSelect;