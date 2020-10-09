import React from 'react';

const UserInfoSelect = ({obj, value, handleUser}) => {
    const {name, opts} = obj;
    
    return (
        <dd>
            <select
                id={name}
                name={name}
                value={value}
                onChange={handleUser}
            >
            {opts()}
            </select>
        </dd>
    );
};

export default UserInfoSelect;