import './style.scss';
import FriendRequestItem from '../FriendRequestItem';
const FriendRequestList = ({ friendRequestList }: any) => {
  return (
    <div className="friend-request-list">
      {friendRequestList.map((request: any) => (
        <FriendRequestItem key={request.id} request={request} />
      ))}
    </div>
  );
};

export default FriendRequestList;
