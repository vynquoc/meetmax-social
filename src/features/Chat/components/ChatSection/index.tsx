import './style.scss';
//components
import ConversationList from '../ConversationList';
import ChatContainer from '../ChatContainer';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../store/store';
import { ConversationType } from '../../../../store/actionTypes/conversationActionTypes';

const ChatSection = () => {
  const { conversationList, currentConversationId } = useSelector(
    (state: RootStore) => state.conversations
  );
  const currentConversation = conversationList.find(
    (conversation: ConversationType) => conversation.id === currentConversationId
  );

  return (
    <div className="chat-section">
      <ConversationList />
      {currentConversation && (
        <ChatContainer key={currentConversation.id} currentConversation={currentConversation} />
      )}
    </div>
  );
};

export default ChatSection;
