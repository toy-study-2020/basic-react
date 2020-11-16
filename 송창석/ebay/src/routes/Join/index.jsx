import React from 'react';
import { JoinProvider } from '../../hooks/JoinContext';
import UserJoinContainer from './UserJoinContainer';

const index = () => {
  return (
    <JoinProvider>
      <UserJoinContainer/>
    </JoinProvider>
  );
};

export default index;