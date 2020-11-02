import React, {useReducer, createContext} from 'react';
import '../../style/join.scss';
import JoinPresenter from "./JoinPresenter";

const initialCheckMethod = {};
const defaultValue =  '';

const initialValue = {
  name: defaultValue,
  nick: defaultValue,
  gender: defaultValue,
  mail: defaultValue
}

export const CheckMethod = createContext(initialCheckMethod);
export const FormValue = createContext(initialValue);

const Join = () => {
  const reducer = (state, action) => {
    switch(action.type) {
      case 'clear':
        return initialValue;
      case action.type:
        return {
          ...state,
          [action.type]: action.value
        };
      default:
        throw new Error();
    }
  }

  const [user, dispatch] = useReducer(reducer, initialValue);

  const checkName  = (e) => {
    dispatch({
      type: 'name',
      value: e.target.value
    });
  };

  const checkNick  = (e) => {
    dispatch({
      type: 'nick',
      value: e.target.value
    });
  };

  const checkGender  = (e) => {
    dispatch({
      type: 'gender',
      value: e.target.value
    });
  };

  const checkMail  = (e) => {
    dispatch({
      type: 'mail',
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
    target.name.value = defaultValue;
    target.nick.value = defaultValue;
    target.gender.value = defaultValue;
    target.mail.value = defaultValue;
  };

  return (
    <CheckMethod.Provider value={{
      checkName: checkName,
      checkNick: checkNick,
      checkGender: checkGender,
      checkMail: checkMail,
      onSubmit: onSubmit
    }}>
      <FormValue.Provider value={{user}}>
        <JoinPresenter />
      </FormValue.Provider>
    </CheckMethod.Provider>
  )
}

export default Join;