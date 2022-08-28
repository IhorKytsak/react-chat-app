import defaultImageUrl from '../../images/defaultuser.png';
import './UserInfo.scss';
import { FcApproval } from 'react-icons/fc';

const UserInfo = ({
  title,
  imageUrl,
  latestMessageDate,
  latestMessageText,
  showCheckMark,
}) => {
  const userName = title ? <div className='userName'>{title}</div> : null;
  const userMessage = latestMessageText ? (
    <div className='userMessage'>{latestMessageText}</div>
  ) : null;
  const userdate = latestMessageDate ? (
    <div className='userDate'>{latestMessageDate}</div>
  ) : null;

  const userAvatar = (
    <div className='imgContainer'>
      <img className='userImg' src={imageUrl || defaultImageUrl} alt='' />
      {showCheckMark && (
        <FcApproval
          size='18px'
          style={{ position: 'absolute', bottom: '0', right: '0' }}
        />
      )}
    </div>
  );

  return (
    <div className='userContainer'>
      {userAvatar}
      <div className='userInfoWrapper'>
        <div className='userDateWrapper'>
          {userName}
          {userdate}
        </div>
        {userMessage}
      </div>
    </div>
  );
};

export default UserInfo;
