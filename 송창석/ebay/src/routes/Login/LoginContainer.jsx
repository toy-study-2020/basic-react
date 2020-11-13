import React from 'react';
import { useFormState, useFormDispatch } from '../../hooks/LoginContext';
import { changeValuesHandler, submitValuesHandler } from '../../utils/FormUtils';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {
  const state = useFormState();
  const dispatch = useFormDispatch();
  const onChange = changeValuesHandler(dispatch)
  const onSubmit = submitValuesHandler(dispatch)

  return (
    <LoginPresenter
      values={state}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;