import React from 'react';
import { LOGIN_OPTS } from '../../constant/constant';
import FormUtils from '../../utils/FormUtils';
import LoginPresenter from './LoginPresenter'

const ConstantContext = React.createContext(null)
const LoginContext = React.createContext(null)
export {
    ConstantContext,
    LoginContext
}


const LoginContainer = () => {
    const LoginValues = FormUtils({
        email: "",
        password: ""
    })

    return (
        <ConstantContext.Provider value={LOGIN_OPTS}>
            <LoginContext.Provider value={LoginValues}>
                <LoginPresenter/>
            </LoginContext.Provider>
        </ConstantContext.Provider>
    );
};

export default LoginContainer;