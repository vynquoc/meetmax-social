import AvatarIcon from '../../../../components/AvatarIcon';
import './style.scss';

const Message = ({ message, left, right }: any) => {
  return (
    <div className="message-container">
      {left && (
        <div className="message left">
          <div className="message-avatar">
            <img src={message.sender.avatar} />
          </div>
          <p className="message-content darker">{message.content}</p>
        </div>
      )}
      {right && (
        <div className="message right">
          <p className="message-content">{message.content}</p>
          <div className="message-avatar">
            <img src={message.sender.avatar} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
