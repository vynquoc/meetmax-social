import './style.scss';
//components
import ConversationList from '../ConversationList';
import ChatContainer from '../ChatContainer';

const ChatSection = () => {
  return (
    <div className="chat-section">
      <ConversationList />
      <ChatContainer />
    </div>
  );
};

export default ChatSection;
