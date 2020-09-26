import React from 'react';
import {MSG} from '../constants/constants';

const Message = ({ type, value })  => {
  const clear = value !== '' && value.indexOf('default') < 0;
  return (
    <>
        {(type !== 'mail') &&
          <span className={clear ? 'clear' : 'alert'}>
            {clear ? MSG.CLEAR : MSG.DEFAULT}
          </span>
        }
    </>
  );
}

export default Message;
