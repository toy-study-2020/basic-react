import React, { useContext } from 'react';
import { UserJoinContext } from '../../App';
import UserJoinPresenter from './UserJoinPresenter';

const UserJoinContainer = () => {
  const provide = useContext(UserJoinContext)

  return (
    <UserJoinPresenter state={provide}/>
  );
};

export default UserJoinContainer;