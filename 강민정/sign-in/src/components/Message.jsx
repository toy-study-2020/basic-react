import React from 'react';
import {MSG} from '../constants/constants';

const Message = ({ type, value })  => {
  return (
    <>
        {(type !== 'mail' && type !== 'gender') &&
          <span className="alert">
            {value !== '' && value.indexOf('default') < 0 ? MSG.CLEAR : MSG.DEFAULT}
          </span>
        }
    </>
  );
}

export default Message;
