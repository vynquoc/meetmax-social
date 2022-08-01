import './style.scss';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import userApi from '../../../../api/userApi';
import friendRequestApi from '../../../../api/friendRequestApi';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../store/store';

//components
import Button from '../../../../components/Button';

const FriendPage = () => {
  const [userData, setUserData] = useState<any>({});
  const { isRecepient, isRequester, isFriend, user } = userData;
  const { username } = useParams();
  const socket = useSelector((state: RootStore) => state.socket.socket);

  const getUser = async () => {
    const response: any = await userApi.getUser(username);
    setUserData(response.data);
  };

  const handleSendRequest = async (recepient: string) => {
    try {
      await friendRequestApi.sendRequest(recepient);
      setUserData({ ...userData, isRecepient: true });
      socket.emit('send-friend-request', recepient);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelRequest = async (recepient: string) => {
    try {
      await friendRequestApi.cancelRequest(recepient);
      setUserData({ ...userData, isRecepient: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAcceptRequest = async (requester: string) => {
    try {
      await friendRequestApi.acceptRequest(requester);
      setUserData({ ...userData, isFriend: true, isRequester: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfriend = async (userToUnfriend: string) => {
    try {
      await friendRequestApi.unfriend(userToUnfriend);
      setUserData({ ...userData, isFriend: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecline = async (requester: string) => {
    try {
      await friendRequestApi.rejectRequest(requester);
      setUserData({ ...userData, isRequester: false });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <p>{userData?.user?.email}</p>
      {isFriend && !isRecepient && !isRequester && (
        <Button text="Unfriend" onClick={() => handleUnfriend(user.id)} />
      )}
      {!isFriend && !isRecepient && isRequester && (
        <div>
          <Button text="Decline" onClick={() => handleDecline(user.id)} />
          <Button text="Accept" onClick={() => handleAcceptRequest(user.id)} />
        </div>
      )}
      {!isFriend && isRecepient && !isRequester && (
        <Button text="Cancel Request" onClick={() => handleCancelRequest(user.id)} />
      )}
      {!isFriend && !isRecepient && !isRequester && (
        <Button text="Add friend" onClick={() => handleSendRequest(user.id)} />
      )}
    </div>
  );
};

export default FriendPage;
