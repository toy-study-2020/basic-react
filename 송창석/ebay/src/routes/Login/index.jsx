import React from 'react';
import { LoginProvider } from '../../hooks/LoginContext';
import LoginContainer from './LoginContainer'

const index = () => {
  return (
    <LoginProvider>
      <LoginContainer/>
    </LoginProvider>
  );
};

export default index;