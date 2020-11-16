import React, { useContext } from 'react';
import { JOIN_TITLE } from '../constants/constants';
import { CheckMethod, FormValue } from '../routes/Join/JoinContainer';
import Message from './Message';

const Form = ({type}) => {
  const {checkFunc} = useContext(CheckMethod);
  const {user} = useContext(FormValue);
  return (
    <div className={`memberForm member-${type}`}>
      <strong>
        {JOIN_TITLE[type]}
        <Message
          value={user[type]}
        />
      </strong>
      {type !== 'gender'
        ? <div className="inputMember">
          <label>
            <input
              type={type !== 'mail' ? 'text' : 'email'}
              name={type}
              autoComplete="off"
              onChange={(e) => {
                checkFunc(e, type);
              }}
              autoFocus={type === 'name'}
            />
          </label>
        </div>
        : <select
          name='gender'
          onChange={(e) => {
            checkFunc(e, type);
          }}
        >
          <option value=''>선택</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>}
    </div>
  )
}


export default Form;