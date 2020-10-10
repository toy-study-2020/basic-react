import React from 'react';

const UserInfoWrap = ({obj, components}) => {
    const {label} = obj;

    return (
        <div className={"input_userinfo"}>
            <label>{label}</label>
            <div>{components}</div>
        </div>
    );
};

export default UserInfoWrap;