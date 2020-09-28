import React from 'react';

const UserInfoInput = ({obj, value, handleUser}) => {
    const {name, type} = obj;
    
    return (
        <dd>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleUser}
            />
        </dd>
    );
};

export default UserInfoInput;