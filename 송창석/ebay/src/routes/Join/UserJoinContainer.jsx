import React from 'react';
import { JOIN_OPTS } from '../../constant/constant';
import FormUtils from '../../utils/FormUtils';
import UserJoinPresenter from './UserJoinPresenter';

const ConstantContext = React.createContext(null)
const UserJoinContext = React.createContext(null)

export {
    ConstantContext,
    UserJoinContext
}

const UserJoinContainer = () => {
    const UserJoinValues = FormUtils({
        name: "",
        email: "",
        password: "",
        gender: "",
        year: "",
        month: "",
        day: ""
    })

    return (
        <ConstantContext.Provider value={JOIN_OPTS}>
            <UserJoinContext.Provider value={UserJoinValues}>
                <UserJoinPresenter/>
            </UserJoinContext.Provider>
        </ConstantContext.Provider>
    );
};

export default UserJoinContainer;