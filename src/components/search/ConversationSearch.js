import React from 'react';
import './ConversationSearch.scss';

const ConversationSearch = ({ chatHistory, onFilter }) => {
  const getFilterValue = (e) => {
    const value = e.target.value.toLowerCase();

    const filterChatHistory = chatHistory.filter((chat) => {
      return chat.title.toLowerCase().includes(value);
    });

    onFilter(filterChatHistory);
  };
  return (
    <input
      className='searchInput'
      type='text'
      placeholder='Search or start new chat'
      onChange={getFilterValue}
    />
  );
};

export default ConversationSearch;
