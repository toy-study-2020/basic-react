import React from 'react';
import { useFormDispatch, useFormState } from '../../hooks/JoinContext';
import { changeValuesHandler, submitValuesHandler } from '../../utils/FormUtils';
import UserJoinPresenter from './UserJoinPresenter';

const UserJoinContainer = () => {
  const state = useFormState();
  const dispatch = useFormDispatch();
  const onChange = changeValuesHandler(dispatch);
  const onSubmit = submitValuesHandler(dispatch);

  return (
    <UserJoinPresenter
      values={state}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default UserJoinContainer;