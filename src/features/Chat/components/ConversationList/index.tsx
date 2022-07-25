import './style.scss';
//components
import SearchBar from '../../../../components/SearchBar';
import Conversation from '../Conversation';

const ConversationList = () => {
  return (
    <div className="conversation-list-container">
      <SearchBar placeholder="Search" />
      <br />
      <Conversation />
      <Conversation />

      <Conversation />

      <Conversation />

      <Conversation />

      <Conversation />
    </div>
  );
};

export default ConversationList;
