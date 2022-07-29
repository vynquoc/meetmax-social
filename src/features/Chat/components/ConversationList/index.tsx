import { useContext, useEffect } from 'react';
import { ConversationContext } from '../../../../contexts/ConversationContext/ConversationContext';
import './style.scss';
//components
import SearchBar from '../../../../components/SearchBar';
import Conversation from '../Conversation';

const ConversationList = () => {
  const { conversationList } = useContext(ConversationContext);

  return (
    <div className="conversation-list-container">
      <SearchBar placeholder="Search" />
      <br />
      {conversationList.map((conversation: any) => {
        return <Conversation key={conversation.id} conversation={conversation} />;
      })}
    </div>
  );
};

export default ConversationList;
