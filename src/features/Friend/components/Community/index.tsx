import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import friendRequestApi from '../../../../api/friendRequestApi';
import FriendList from '../FriendList';
import FriendRequestList from '../FriendRequestList';
import './style.scss';

const Community = () => {
  const [friendRequests, setFriendRequests] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const tabName = searchParams.get('tab');
  const handleChangeTab = (tab: string) => {
    setSearchParams({ tab: tab });
  };
  const getAllFriendRequests = async () => {
    const response: any = await friendRequestApi.getAll();
    setFriendRequests(response.friendRequests);
  };
  useEffect(() => {
    getAllFriendRequests();
  }, []);
  return (
    <div className="community-container">
      <div className="tab-panel">
        <div
          className={'tab ' + (tabName === 'friends' && 'tab-active')}
          onClick={() => handleChangeTab('friends')}
        >
          Friends
        </div>
        <div
          className={'tab ' + (tabName === 'friend-requests' && 'tab-active')}
          onClick={() => handleChangeTab('friend-requests')}
        >
          Friend Requests
        </div>
      </div>
      <div>
        {tabName === 'friends' && <FriendList />}
        {tabName === 'friend-requests' && <FriendRequestList friendRequestList={friendRequests} />}
      </div>
    </div>
  );
};

export default Community;
