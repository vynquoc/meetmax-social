import { useContext } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import friendRequestApi from '../../../../api/friendRequestApi';
import AvatarIcon from '../../../../components/AvatarIcon';
import { ModalContext } from '../../../../contexts/ModalContext';
import UnfriendModal from '../UnfriendModal';

interface Friend {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
}

interface FriendItemProps {
  friend: Friend;
}

const FriendItem = ({ friend }: FriendItemProps) => {
  const { id, firstName, lastName, username, avatar } = friend;
  const { handleToggleModal } = useContext(ModalContext);

  const handleUnfriend = async () => {
    try {
      await friendRequestApi.unfriend(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="friend-item">
      <div className="friend-item-info">
        <AvatarIcon avatarUrl={avatar} />
        <div className="friend-item-info-name">
          <p>{firstName + ' ' + lastName}</p>
          <p>{'@' + username}</p>
        </div>
      </div>
      <div className="friend-item-action">
        <Link to={`/profile/${username}`} className="friend-item-button view-button">
          View profile
        </Link>
        <button
          className="friend-item-button unfriend-button"
          onClick={() =>
            handleToggleModal(
              <UnfriendModal username={username} onSubmitUnfriend={handleUnfriend} />
            )
          }
        >
          Unfriend
        </button>
      </div>
    </div>
  );
};

export default FriendItem;
