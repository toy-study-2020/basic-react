import React from 'react';
import useFormStore from '../../store/useFormStore';
import LoginPresenter from './LoginPresenter'

export const LoginContext = React.createContext(null)

const LoginContainer = () => {
  const loginValues = useFormStore({
    email: "",
    password: ""
  })
  

  return (
    <LoginContext.Provider value={loginValues}>
      <LoginPresenter/>
    </LoginContext.Provider>
  );
};

export default LoginContainer;