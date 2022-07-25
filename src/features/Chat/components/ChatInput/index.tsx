import './style.scss';
import { GrAttachment } from 'react-icons/gr';
import { MdTagFaces } from 'react-icons/md';
import { BiSend } from 'react-icons/bi';
const ChatInput = (props: any) => {
  return (
    <div className="chat-input-container">
      <div className="chat-input">
        <input />
        <div className="chat-input-icon">
          <GrAttachment />
          <MdTagFaces />
        </div>
      </div>
      <div className="send-button">
        <BiSend className="send-button-inner" />
      </div>
    </div>
  );
};

export default ChatInput;
