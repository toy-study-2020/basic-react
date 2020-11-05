import React, { useReducer, useCallback } from 'react';
import InputText from './components/InputText';
import InputSelect from './components/InputSelect';

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
  }
}

const initialState = {
  texts: {
    gender: ['여', '남'],
  },
  inputs: {
    username: '윤선지',
    neckname: '선디',
    gender: '여',
    email: 'yunsnnji9@hanmail.net'
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, neckname, gender, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <span>이름 :</span>
            <span>{username}</span>
          </li>
          <li>
            <span>별명 :</span>
            <span>{neckname}</span>
          </li>
          <li>
            <span>성별 :</span>
            <span>{gender}</span>
          </li>
          <li>
            <span>이메일 :</span>
            <span>{email}</span>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <span>이름 :</span>
            <InputText onChange={onChange} name="username"></InputText>
          </li>
          <li>
            <span>별명 :</span>
            <InputText onChange={onChange} name="neckname"></InputText>
          </li>
          <li>
            <span>성별 :</span>
            <InputSelect onChange={onChange} name="gender" options={state.texts.gender}></InputSelect>
          </li>
          <li>
            <span>이메일 :</span>
            <InputText onChange={onChange} name="email"></InputText>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
