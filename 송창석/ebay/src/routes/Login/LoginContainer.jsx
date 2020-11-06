import React, { useContext } from 'react';
import { LoginContext } from '../../App';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {
  const provide = useContext(LoginContext)

  return (
    <LoginPresenter state={provide}/>
  );
};

export default LoginContainer;