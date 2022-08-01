import { useEffect, useState } from 'react';
import moment from 'moment';
import AvatarIcon from '../../../../components/AvatarIcon';
import { useSearchParams } from 'react-router-dom';

import './style.scss';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../store/store';

const Conversation = ({ conversation }: any) => {
  const currentUser = useSelector((state: RootStore) => state.user.currentUser);
  const [searchParams, setSearchParams] = useSearchParams({});
  const conversationId: any = searchParams.get('conversationId');
  const [friend, setFriend] = useState<any>(null);

  const handleSelectConversation = () => {
    setSearchParams({ conversationId: conversation.id });
  };

  useEffect(() => {
    const friend = conversation.members.find((m: any) => m.id !== currentUser?.id);
    setFriend(friend);
  }, []);

  return (
    <div
      className={'conversation ' + (conversationId === conversation?.id ? 'selected' : '')}
      onClick={handleSelectConversation}
    >
      <div className="conversation-info">
        <AvatarIcon avatarUrl={friend?.avatar} />
        <div className="conversation-info-name-container">
          <p className="conversation-info-name">{friend?.firstName + ' ' + friend?.lastName}</p>
          <p className="conversation-info-last-message">
            {conversation.lastMessage
              ? `${
                  currentUser?.username === conversation.lastMessage.sender.username
                    ? 'You'
                    : conversation.lastMessage.sender.username
                } : ${conversation.lastMessage.content}`
              : `You and ${friend?.firstName + ' ' + friend?.lastName} are now connected`}
          </p>
        </div>
        <div className="conversation-info-timestamp">
          <span className="conversation-info-time">
            {conversation.lastMessage
              ? moment(conversation.lastMessage.createdAt).format('LT')
              : ''}
          </span>
          {/* <span className="conversation-info-noti">1</span> */}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
