import React from 'react';

const UserInfoSelect = ({obj, value, handleUser}) => {
    const {name, opts} = obj;
    
    return (
        <select
            id={name}
            name={name}
            value={value}
            onChange={handleUser}
        >
        <option value={""}>선택</option>
        {opts()}
        </select>
    );
};

export default UserInfoSelect;