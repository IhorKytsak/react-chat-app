import { useState } from 'react';
import SidebarHeader from './sidebar-header';
import SidebarList from './sidebar-list';
import { sortByDate } from '../../utils/date';

import './sidebar.scss';

const Sidebar = ({ onUserChatClick, chatHistory, showChatMobile }) => {
  const [currentChatHistory, setCurrentChatHistory] = useState(chatHistory);

  const selectUserChatHandler = (currentUser) => {
    onUserChatClick(currentUser);
  };

  const filteredUsersChat = (filteredChat) => {
    setCurrentChatHistory(filteredChat);
  };

  const sidebarClasses = showChatMobile ? 'sidebar sidebarHidden' : 'sidebar';

  return (
    <div className={sidebarClasses}>
      <SidebarHeader
        chatHistory={chatHistory}
        onUsersChatFilter={filteredUsersChat}
      />
      <SidebarList
        chatHistory={currentChatHistory.sort(sortByDate)}
        onSelectUserChat={selectUserChatHandler}
      />
    </div>
  );
};

export default Sidebar;
