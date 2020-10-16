import React from 'react';
import {join_msg} from '../../constants/constants';

const Message = ({value})  => {
  const clear = value;
  return (
    <>
      {
        <span className={clear ? 'clear' : 'alert'}>
          {clear ? join_msg.clear : join_msg.default}
        </span>
      }
    </>
  );
}

export default Message;
