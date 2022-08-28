import SendForm from '../../components/send-form/SendForm';
import UserInfo from '../../components/user-info/UserInfo';
import MessageList from './message-list';
import { CgArrowLongLeft } from 'react-icons/cg';
import './chat.scss';

const Chat = ({
  currentUserChatHistory,
  onSendNewMessage,
  showChatMobile,
  onHideChat,
}) => {
  const getSendMessageHandler = (message) => {
    onSendNewMessage(message);
  };

  const currentUserName = currentUserChatHistory
    ? currentUserChatHistory.title
    : '';

  const currentUserImg = currentUserChatHistory
    ? currentUserChatHistory.imageUrl
    : null;

  const chatClasses = showChatMobile ? 'chat' : 'chat chatHidden';

  return (
    <div className={chatClasses}>
      <div className='chatTitle'>
        <UserInfo
          title={currentUserName}
          imageUrl={currentUserImg}
          showCheckMark={!!currentUserChatHistory}
        />
        <div onClick={onHideChat} className='backArrow'>
          <CgArrowLongLeft size={35} />
        </div>
      </div>
      <MessageList currentUserChatHistory={currentUserChatHistory} />
      <SendForm
        onSendMessage={getSendMessageHandler}
        isButtonDisabled={!currentUserChatHistory}
      />
    </div>
  );
};

export default Chat;
