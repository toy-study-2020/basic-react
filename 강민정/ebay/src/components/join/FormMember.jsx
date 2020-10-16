import React from 'react';
import Message from './Message';

const FormMember = ({type, check, value}) => {
  return (
    <div className={`memberForm member-${type.class}`}>
      <strong>
        {type.title}
        <Message
          value={value}
        />
      </strong>
      <div className="inputMember">
        {type.class === 'name' &&
        <label>
          <input
            type="text"
            name={type.class}
            autoComplete="off"
            onChange={check}
            autoFocus
          />
        </label>
        }

        {type.class === 'nick' &&
        <label>
          <input
            type="text"
            name={type.class}
            autoComplete="off"
            onChange={check}
            autoFocus
          />
        </label>
        }

        {type.class === 'gender' &&
        <>
          <select
            name={type.class}
            onChange={check}
          >
            <option value={type.default}>선택</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>
        </>
        }

        {type.class === 'mail' &&
        <label>
          <input
            type="email"
            name={type.class}
            onChange={check}
            autoComplete="off"
          />
        </label>
        }
      </div>
    </div>
  );
}

export default FormMember;
