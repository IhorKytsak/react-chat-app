import React, { useRef } from 'react';
import { MdOutlineSend } from 'react-icons/md';

import './SendForm.scss';

const SendForm = ({ onSendMessage, isButtonDisabled }) => {
  const inputRef = useRef();

  const addMassageToChatHistory = (element) => {
    element.preventDefault();

    if (inputRef.current.value.trim() === '') {
      return;
    }

    onSendMessage(inputRef.current.value);

    inputRef.current.value = '';
  };

  return (
    <form className='sendForm' onSubmit={addMassageToChatHistory}>
      <div className='sendFormContent'>
        <input
          ref={inputRef}
          className='sendFormInput'
          type='text'
          placeholder='Type your message'
        />
        <button
          className='sendButton'
          type='submit'
          disabled={isButtonDisabled}
        >
          <MdOutlineSend className='sendButtonIcon' />
        </button>
      </div>
    </form>
  );
};

export default SendForm;
