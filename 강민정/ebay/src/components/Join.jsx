import React, {useReducer} from 'react';
import {join_default} from '../constants/constants';
import FormMember from './join/FormMember';
import '../style/join.scss';

const Join = () => {
  const {name, nick, gender, mail} = join_default;
  const initialState = {
    name: name.default,
    nick: nick.default,
    gender: gender.default,
    mail: name.default
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case action.type:
        return {
          ...state,
          [action.type]: action.value
        };
      default:
        throw new Error();
    }
  }

  const [user, dispatch] = useReducer(reducer, initialState);

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
    target.name.value = name.default;
    target.nick.value = nick.default;
    target.gender.value = gender.default;
    target.mail.value = mail.default;
  }

  return (
    <div className="formMember">
      <form
        name="signMember"
        onSubmit={onSubmit}>
        <FormMember
          type={name}
          check={checkName}
          value={user.name}
          />
        <FormMember
          type={nick}
          check={checkNick}
          value={user.nick}
        />
        <FormMember
          type={gender}
          check={checkGender}
          value={user.gender}
        />
        <FormMember
          type={mail}
          check={checkMail}
          value={user.mail}
        />
        <button
          type="submit"
          className="buttonSubmit">
          등록
        </button>
      </form>
    </div>
  );
}

export default Join;
