import React from 'react';
import { useFormChange, useFormState, useFormSubmit } from '../../hooks/JoinContext';
import UserJoinPresenter from './UserJoinPresenter';

const UserJoinContainer = () => {
  const state = useFormState();
  const onChange = useFormChange();
  const onSubmit = useFormSubmit();

  return (
    <UserJoinPresenter
      values={state}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default UserJoinContainer;