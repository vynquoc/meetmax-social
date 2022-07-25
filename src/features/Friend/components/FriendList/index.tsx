import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import './style.scss';
import FriendItem from '../FriendItem';

const FriendList = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="friend-list">
      {currentUser?.friends.map((friend: any) => (
        <FriendItem friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
