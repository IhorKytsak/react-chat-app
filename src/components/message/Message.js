import React from 'react';
import { getCurrentDateForChat } from '../../utils/date';

import './Message.scss';

import defaultImageUrl from '../../images/defaultuser.png';

const Message = ({ isMyMessage, message, createdAt, imageUrl }) => {
  const messageImg = isMyMessage ? null : (
    <img className='messageImg' src={imageUrl || defaultImageUrl} alt='' />
  );

  const messageStyles = isMyMessage
    ? 'messageWrapper myMessage'
    : 'messageWrapper';

  const messageDate = getCurrentDateForChat(createdAt);

  return (
    <div className={messageStyles}>
      {messageImg}
      <div className='messageBody'>
        <div className='messageText'>{message}</div>
        <div className='messageDate'>{messageDate}</div>
      </div>
    </div>
  );
};

export default Message;
