import React from 'react';
import useFormStore from '../../store/useFormStore';
import UserJoinPresenter from './UserJoinPresenter';

export const UserJoinContext = React.createContext(null)

const UserJoinContainer = () => {
  const UserJoinValues = useFormStore({
    name: "",
    email: "",
    password: "",
    gender: "",
    year: "",
    month: "",
    day: ""
  })

  return (
    <UserJoinContext.Provider value={UserJoinValues}>
      <UserJoinPresenter/>
    </UserJoinContext.Provider>
  );
};

export default UserJoinContainer;