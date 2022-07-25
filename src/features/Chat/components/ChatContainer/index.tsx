import { AiOutlinePhone, AiOutlineVideoCamera, AiOutlineExclamationCircle } from 'react-icons/ai';
import AvatarIcon from '../../../../components/AvatarIcon';
import ChatInput from '../ChatInput';

import './style.scss';

const ChatContainer = () => {
  return (
    <div className="chat-container">
      <div className="chat-container-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AvatarIcon />
          <p>Vy Nguyen</p>
        </div>
        <div>
          <AiOutlinePhone />
          <AiOutlineVideoCamera />
          <AiOutlineExclamationCircle />
        </div>
      </div>
      <hr />
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
