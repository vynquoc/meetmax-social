import React, { useEffect, useState } from 'react';
import './style.scss';
import userApi from '../../../../api/userApi';
import { NavLink } from 'react-router-dom';
const FriendSuggestion = () => {
  const [suggestionList, setSuggestionList] = useState([]);
  const getSuggestionFriendList = async () => {
    const res: any = await userApi.getSuggestionFriendList();
    setSuggestionList(res.suggestionList);
  };

  useEffect(() => {
    getSuggestionFriendList();
  }, []);
  return (
    <div className="suggestion-container">
      <p>Suggestion</p>
      {suggestionList.map((user: any) => (
        <div className="suggestion-user-container">
          <img className="user-avatar" src={user.avatar} alt="avatar" />
          <div className="name">
            <NavLink to={`/profile/${user.username}`} className="user-name">
              {user.firstName + ' ' + user.lastName}
            </NavLink>
            <span className="user-username">{'@' + user.username}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendSuggestion;
