import React from 'react';
import Birth from './Birth';

const FormMember = ({ type }) => {
  const prefix = `member-`;
  return (
      <div className={`${prefix}${type.CLASS}`}>
        <strong>
          {type.TITLE}
        </strong>

        <div className="inputMember">
          {type.CLASS === 'name' &&
            <label>
              <input
                type="text"
                name={`${prefix}${type.CLASS}`}
                autoComplete="off"
              />
            </label>
          }

          {type.CLASS === 'birth' &&
            <Birth />
          }

          {type.CLASS === 'gender' &&
            <>
              <label aria-label="남성">
                <input type="radio" name={`${prefix}${type.CLASS}`} />
                <span>남성</span>
              </label>
              <label aria-label="여성">
                <input type="radio" name={`${prefix}${type.CLASS}`} />
                <span>여성</span>
              </label>
            </>
          }

          {type.CLASS === 'mail' &&
            <label>
              <input
                type="email"
                name={`${prefix}${type.CLASS}`}
                autoComplete="off"
              />
            </label>
          }
        </div>
      </div>
  );
}

export default FormMember;
