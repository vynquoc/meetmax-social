import './style.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../store/store';
import conversationApi from '../../../../api/conversationApi';
import { useDispatch } from 'react-redux';
import {
  addNewConversation,
  setCurrentConversationId,
} from '../../../../store/actions/conversationActions';
import { useNavigate } from 'react-router-dom';
import { ConversationType } from '../../../../store/actionTypes/conversationActionTypes';

//components
import SearchBar from '../../../../components/SearchBar';

const FriendOnlineList = () => {
  const currentUser = useSelector((state: RootStore) => state.user.currentUser);
  const conversationList = useSelector((state: RootStore) => state.conversations.conversationList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFriendClick = async (recipient: string) => {
    try {
      const { conversation }: any = await conversationApi.getConversation({ recipient });
      dispatch<any>(setCurrentConversationId(conversation.id));
      if (!conversationList.find((con: ConversationType) => con.id === conversation.id)) {
        dispatch<any>(addNewConversation(conversation));
      }
      navigate('/messages');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="friend-list-container">
      <SearchBar placeholder="Search friends" />
      <div className="friend-list-header">
        <span>Friends</span>
        <BiDotsHorizontalRounded className="dots-icon" />
      </div>
      {currentUser?.friends.map((friend) => (
        <div
          className="friend-container"
          key={friend.id}
          onClick={() => handleFriendClick(friend.id)}
        >
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

export default FriendOnlineList;
