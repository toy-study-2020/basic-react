import React, {useContext} from 'react';
import Message from './Message';
import {CheckMethod, FormValue} from "./JoinContainer";

const FormMember = () => {
  const {
    checkName,
    checkNick,
    checkGender,
    checkMail,
    onSubmit,
  } = useContext(CheckMethod);
  const {user} = useContext(FormValue);
  return (
    <form onSubmit={onSubmit}>
      <div className='memberForm member-name'>
        <strong>
          이름
          <Message
            value={user.name}
          />
        </strong>
        <div className="inputMember">
          <label>
            <input
              type="text"
              name='name'
              autoComplete="off"
              onChange={checkName}
              autoFocus
            />
          </label>
        </div>
      </div>
      <div className='memberForm member-nick'>
        <strong>
          닉네임
          <Message
            value={user.nick}
          />
        </strong>
        <label>
          <input
            type="text"
            name='nick'
            autoComplete="off"
            onChange={checkNick}
          />
        </label>
      </div>
      <div className='memberForm member-gender'>
        <strong>
          성별
          <Message
            value={user.gender}
          />
        </strong>
        <select
          name='gender'
          onChange={checkGender}
        >
          <option value=''>선택</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </div>
      <div className='memberForm member-mail'>
        <strong>
          메일
          <Message
            value={user.mail}
          />
        </strong>
        <label>
          <input
            type="email"
            name='mail'
            onChange={checkMail}
            autoComplete="off"
          />
        </label>
      </div>
      <button
        type="submit"
        className="buttonSubmit">
        등록
      </button>
    </form>
  );
}

export default FormMember;
