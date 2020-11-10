import React from 'react';
import { useFormState, useFormChange, useFormSubmit } from '../../hooks/LoginContext';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {
  const state = useFormState();
  const onChange = useFormChange();
  const onSubmit = useFormSubmit();

  return (
    <LoginPresenter
      values={state}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;