import React, {useReducer, createContext} from 'react';
import '../../style/join.scss';
import { JOIN_INITIAL_VALUE, JOIN_INITIAL_METHOD } from '../../constants/constants';
import JoinPresenter from "./JoinPresenter";


export const CheckMethod = createContext(JOIN_INITIAL_METHOD);
export const FormValue = createContext(JOIN_INITIAL_VALUE);

const Join = () => {
  const reducer = (state, action) => {
    switch(action.type) {
      case 'clear':
        return JOIN_INITIAL_VALUE;
      case action.type:
        return {
          ...state,
          [action.type]: action.value
        };
      default:
        throw new Error();
    }
  }

  const [user, dispatch] = useReducer(reducer, JOIN_INITIAL_VALUE);

  const checkFunc  = (e, type) => {
    dispatch({
      type: [type],
      value: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!user.name) return console.error('insert name');
    if (!user.nick) return console.error('insert nick');
    if (!user.gender) return console.error('insert gender');
    if (!user.mail) return console.error('insert mail');
    console.log(user);
    clearValue(e.target);
  }

  const clearValue = (target) => {
    dispatch({type: 'clear'});
    target.name.value = '';
    target.nick.value = '';
    target.gender.value = '';
    target.mail.value = '';
  };

  return (
    <CheckMethod.Provider value={{
      checkFunc: checkFunc,
      onSubmit: onSubmit
    }}>
      <FormValue.Provider value={{user}}>
        <JoinPresenter />
      </FormValue.Provider>
    </CheckMethod.Provider>
  )
}

export default Join;