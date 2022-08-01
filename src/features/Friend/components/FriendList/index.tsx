import { useSelector } from 'react-redux';
import { RootStore } from '../../../../store/store';

import './style.scss';
import FriendItem from '../FriendItem';

const FriendList = () => {
  const currentUser = useSelector((state: RootStore) => state.user.currentUser);
  return (
    <div className="friend-list">
      {currentUser?.friends.map((friend: any) => (
        <FriendItem friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
