import './style.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import userApi from '../../../../api/userApi';
import friendRequestApi from '../../../../api/friendRequestApi';
//components
import Button from '../../../../components/Button';

const FriendPage = () => {
  const [userData, setUserData] = useState<any>({});
  const { isRecepient, isRequester, isFriend } = userData;
  const { username } = useParams();

  const getUser = async () => {
    const response: any = await userApi.getUser(username);
    setUserData(response.data);
  };

  const handleSendRequest = async (recepient: string) => {
    const response = await friendRequestApi.sendRequest(recepient);
    console.log(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <p>{userData?.user?.email}</p>
      {isFriend ? (
        <Button text="Unfriend" />
      ) : isRequester ? (
        <Button text="Decline" />
      ) : isRecepient ? (
        <Button text="Accept" />
      ) : null}
      {!isFriend && !isRecepient && !isRequester && (
        <Button text="Add friend" onClick={() => handleSendRequest(userData.user.id)} />
      )}
    </div>
  );
};

export default FriendPage;
