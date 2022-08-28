import { useState, useEffect } from 'react';
import Chat from './containers/chat/chat';
import Sidebar from './containers/sidebar/sidebar';
import { chatHistory } from './containers/chat/chat-history';
import {
  getlocalStorageData,
  setlocalStorageData,
} from './utils/local-storage';
import { createOwnMessage, responseMessageFromAPI } from './utils/messages';

import './App.scss';

const userChatHistory = getlocalStorageData() || chatHistory;

const App = () => {
  const [currentUserChatHistory, setCurrentUserChatHistory] = useState(null);
  const [updatedChatHistory, setUpdatedChatHistory] = useState(userChatHistory);
  const [ownNewMessage, setOwnNewMessage] = useState(null);
  const [otherNewMessage, setOtherNewMessage] = useState(null);
  const [showChatMobile, setShowChatMobile] = useState(false);

  const userChatClickHandler = (currentUser) => {
    setCurrentUserChatHistory(currentUser);
    setShowChatMobile(true);
  };

  const hideChatHandler = () => {
    setShowChatMobile(false); 
  };

  const updateUserChatHistory = async (newMessage) => {
    setOwnNewMessage(createOwnMessage(newMessage));

    const receivedMessage = await responseMessageFromAPI(
      currentUserChatHistory.imageUrl
    );

    setOtherNewMessage(receivedMessage);
  };

  useEffect(() => {
    setlocalStorageData(updatedChatHistory);
  }, [updatedChatHistory]);

  useEffect(() => {
    if (currentUserChatHistory && ownNewMessage && otherNewMessage) {
      setUpdatedChatHistory((oldHistory) => {
        const newHistory = [...oldHistory];

        const userChatIndex = newHistory.findIndex(
          (item) => item.id === currentUserChatHistory.id
        );

        const userChat = newHistory[userChatIndex];

        userChat.messages = [ownNewMessage, ...userChat.messages];

        setOwnNewMessage(null);
        return newHistory;
      });

      setTimeout(() => {
        setUpdatedChatHistory((oldHistory) => {
          const newHistory = [...oldHistory];

          const userChatIndex = newHistory.findIndex(
            (item) => item.id === currentUserChatHistory.id
          );

          const userChat = newHistory[userChatIndex];

          userChat.messages = [otherNewMessage, ...userChat.messages];

          setOtherNewMessage(null);

          return newHistory;
        });
      }, 10000);
    }
  }, [ownNewMessage, otherNewMessage, currentUserChatHistory]);

  return (
    <div className='main-container'>
      <Sidebar
        chatHistory={updatedChatHistory}
        onUserChatClick={userChatClickHandler}
        showChatMobile={showChatMobile}
      />
      <Chat
        currentUserChatHistory={currentUserChatHistory}
        onSendNewMessage={updateUserChatHistory}
        showChatMobile={showChatMobile}
        onHideChat={hideChatHandler}
      />
    </div>
  );
};

export default App;
