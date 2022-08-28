import Message from '../../components/message/Message';
import './message-list.scss';

const MessageList = ({ currentUserChatHistory }) => {
  if (!currentUserChatHistory) {
    return (
      <div className='messageListContainer centered'>
        <div className='notChattingYet'>Select a chat to start messaging.</div>
      </div>
    );
  }

  if (currentUserChatHistory.messages.length < 1) {
    return (
      <div className='messageListContainer centered'>
        <div className='notChattingYet'>
          You have not chatting with this user yet.
        </div>
      </div>
    );
  }

  const userImg = currentUserChatHistory.imageUrl;

  const messageList = currentUserChatHistory.messages.map((message) => (
    <Message
      key={Math.random().toString()}
      message={message.messageText}
      isMyMessage={message.isMyMessage}
      createdAt={message.createdAt}
      imageUrl={userImg}
    />
  ));

  return <div className='messageListContainer'>{messageList}</div>;
};

export default MessageList;
