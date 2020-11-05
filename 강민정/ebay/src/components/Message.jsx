import React from 'react';
import { JOIN_MSG } from '../constants/constants.js';

const Message = ({value}) => {
  const {CLEAR, DEFAULT} = JOIN_MSG;
  const clear = value;
  return (
    <>
      {
        <span className={clear ? 'clear' : 'alert'}>
          {clear ? CLEAR : DEFAULT}
        </span>
      }
    </>
  );
};

export default Message;
