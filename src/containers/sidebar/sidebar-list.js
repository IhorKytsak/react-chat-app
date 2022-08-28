import UserInfo from '../../components/user-info/UserInfo';
import { getCurrentDateForSidebar } from '../../utils/date';
import './sidebar-list.scss';

const SidebarList = ({ chatHistory, onSelectUserChat }) => {
  const selectChatHandler = (currentUser) => {
    onSelectUserChat(currentUser);
  };

  let chatHistoryItems = <div className="chatNoFaund">No chats found</div>;

  if (chatHistory.length > 0) {
    chatHistoryItems = chatHistory.map((item) => {
      const latestMessage =
        item.messages.length > 0
          ? item.messages[0].messageText
          : "Haven't chatted yet.";

      const latestMessageDate = item.messages[0]?.createdAt
        ? item.messages[0]?.createdAt
        : item.joinedDate;

      const formattedLatestMessageDate =
        getCurrentDateForSidebar(latestMessageDate);

      return (
        <div
          key={item.id}
          className='userInfoItemWrapper'
          onClick={selectChatHandler.bind(null, item)}
        >
          <UserInfo
            title={item.title}
            imageUrl={item.imageUrl}
            latestMessageDate={formattedLatestMessageDate}
            latestMessageText={latestMessage}
            showCheckMark
          />
        </div>
      );
    });
  }

  return (
    <>
      <div className='listTitle'>Chats</div>
      <div className='listContainer'>{chatHistoryItems}</div>
    </>
  );
};

export default SidebarList;
