import React, { useContext } from 'react';
import './style.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { AuthContext } from '../../../../contexts/AuthContext';
//components
import SearchBar from '../../../../components/SearchBar';

const FriendList = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="friend-list-container">
      <SearchBar placeholder="Search friends" />
      <div className="friend-list-header">
        <span>Friends</span>
        <BiDotsHorizontalRounded className="dots-icon" />
      </div>
      {currentUser?.friends.map((friend) => (
        <div className="friend-container" key={friend.id}>
          <img className="friend-avatar" src={friend.avatar} alt="avatar" />
          <span className="friend-name">{friend.firstName + ' ' + friend.lastName}</span>
          <div className="friend-status">
            <BsDot className="status-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
