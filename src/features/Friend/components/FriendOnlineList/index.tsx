import { useContext } from 'react';
import './style.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { AuthContext } from '../../../../contexts/AuthContext';
//components
import SearchBar from '../../../../components/SearchBar';
import conversationApi from '../../../../api/conversationApi';
import { useNavigate } from 'react-router-dom';
import { ConversationContext } from '../../../../contexts/ConversationContext/ConversationContext';

const FriendOnlineList = () => {
  console.log('CPN FriendOnlineList');
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ConversationContext);
  const navigate = useNavigate();

  const handleFriendClick = async (recipient: string) => {
    try {
      const { conversation }: any = await conversationApi.getConversation({ recipient });
      navigate(`/messages?conversationId=${conversation?.id}`);
      dispatch({ type: 'SET_CURRENT_CONVERSATION', payload: { conversation } });
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
