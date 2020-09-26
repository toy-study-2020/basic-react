import React from 'react';
import Birth from './Birth';
import Message from './Message';

const FormMember = ({ type, check, value}) => {
  return (
      <div className={`memberForm member-${type.CLASS}`}>
        <strong>
          {type.TITLE}
          <Message
            type={type.CLASS}
            value={value}
          />
        </strong>

        <div className="inputMember">
          {type.CLASS === 'name' &&
            <label>
              <input
                type="text"
                name={type.CLASS}
                autoComplete="off"
                onChange={check}
                autoFocus
              />
            </label>
          }

          {type.CLASS === 'birth' &&
            <>
            <Birth
              type={type}
              check={check}/>
            </>
          }

          {type.CLASS === 'gender' &&
            <>
              <label aria-label="남성">
                <input
                  type="radio"
                  name={`${type.CLASS}`}
                  value="남성"
                  onChange={check}
                  checked={type.DEFAULT === '남성'}
                />
                <span>남성</span>
              </label>
              <label aria-label="여성">
                <input
                  type="radio"
                  name={`${type.CLASS}`}
                  value="여성"
                  onChange={check}
                />
                <span>여성</span>
              </label>
            </>
          }

          {type.CLASS === 'mail' &&
            <label>
              <input
                type="email"
                name={type.CLASS}
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
