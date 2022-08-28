import ConversationSearch from '../../components/search/ConversationSearch';
import UserInfo from '../../components/user-info/UserInfo';

import './sidebar-header.scss';

const SidebarHeader = ({ chatHistory, onUsersChatFilter }) => {
  const getFIlterValue = (filterValue) => {
    onUsersChatFilter(filterValue);
  };

  return (
    <div className='sidebarHeader-container'>
      <UserInfo showCheckMark />
      <ConversationSearch chatHistory={chatHistory} onFilter={getFIlterValue} />
    </div>
  );
};

export default SidebarHeader;
