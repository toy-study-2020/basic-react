import React from 'react';
import {JOIN_MSG} from '../constants/constants';

const Message = ({ type, value })  => {
  const clear = value !== '' && value.indexOf('default') < 0;
  return (
    <>
        {(type !== 'mail') &&
          <span className={clear ? 'clear' : 'alert'}>
            {clear ? JOIN_MSG.CLEAR : JOIN_MSG.DEFAULT}
          </span>
        }
    </>
  );
}

export default Message;
