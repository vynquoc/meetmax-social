import { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import friendRequestApi from '../../../../api/friendRequestApi';
import AvatarIcon from '../../../../components/AvatarIcon';

const FriendRequestItem = ({ request }: any) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);
  const { requester } = request;
  const handleAccept = async (requester: string) => {
    try {
      await friendRequestApi.acceptRequest(requester);
      setIsAccepted(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDecline = async (requester: string) => {
    try {
      await friendRequestApi.rejectRequest(requester);
      setIsDeclined(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="request-item">
      <div className="request-item-info">
        <AvatarIcon avatarUrl={requester.avatar} />
        <Link to={`/profile/${requester.username}`} className="request-item-info-name">
          <p>{requester.firstName + ' ' + requester.lastName}</p>
          <p>{'@' + requester.username}</p>
        </Link>
      </div>
      <div className="request-item-action">
        {!isAccepted && !isDeclined && (
          <>
            <button
              className="request-item-button accept-button"
              onClick={() => handleAccept(requester.id)}
            >
              Accept
            </button>
            <button
              className="request-item-button decline-button"
              onClick={() => handleDecline(requester.id)}
            >
              Decline
            </button>
          </>
        )}
        {isAccepted && !isDeclined && (
          <div className="request-item-button action-message">Accepted</div>
        )}
        {!isAccepted && isDeclined && (
          <div className="request-item-button action-message">Declined</div>
        )}
      </div>
    </div>
  );
};

export default FriendRequestItem;
