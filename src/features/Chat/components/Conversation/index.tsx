import AvatarIcon from '../../../../components/AvatarIcon';
import './style.scss';

const Conversation = () => {
  return (
    <div className="conversation selected">
      <div className="conversation-info">
        <AvatarIcon />
        <div className="conversation-info-name-container">
          <p className="conversation-info-name">User test1</p>
          <p className="conversation-info-last-message">I want to start a new project</p>
        </div>
        <div className="conversation-info-timestamp">
          <span className="conversation-info-time">1:30pm</span>
          <span className="conversation-info-noti">1</span>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
