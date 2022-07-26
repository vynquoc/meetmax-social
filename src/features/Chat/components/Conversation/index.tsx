import { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import AvatarIcon from '../../../../components/AvatarIcon';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ConversationContext } from '../../../../contexts/ConversationContext/ConversationContext';
import './style.scss';

const Conversation = ({ conversation }: any) => {
  const { currentUser } = useContext(AuthContext);
  const { currentConversation, dispatch } = useContext(ConversationContext);
  const [friend, setFriend] = useState<any>(null);

  const handleSelectConversation = () => {
    dispatch({ type: 'SET_CURRENT_CONVERSATION', payload: { conversation } });
  };

  useEffect(() => {
    const friend = conversation.members.find((m: any) => m.id !== currentUser?.id);
    setFriend(friend);
  }, []);

  return (
    <div
      className={'conversation ' + (currentConversation?.id === conversation?.id ? 'selected' : '')}
      onClick={handleSelectConversation}
    >
      <div className="conversation-info">
        <AvatarIcon avatarUrl={friend?.avatar} />
        <div className="conversation-info-name-container">
          <p className="conversation-info-name">{friend?.firstName + ' ' + friend?.lastName}</p>
          <p className="conversation-info-last-message">
            {conversation.lastMessage
              ? conversation.lastMessage.content
              : `You and ${friend?.firstName + ' ' + friend?.lastName} are now connected`}
          </p>
        </div>
        <div className="conversation-info-timestamp">
          <span className="conversation-info-time">
            {conversation.lastMessage ? moment(conversation.lastMessage.createdAt).fromNow() : ''}
          </span>
          <span className="conversation-info-noti">1</span>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
