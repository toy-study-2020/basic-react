import React from 'react';

const UserInfoWrap = ({obj, components}) => {
    const {label} = obj;

    return (
        <dl>
            <dt>{label}</dt>
            {components}
        </dl>
    );
};

export default UserInfoWrap;