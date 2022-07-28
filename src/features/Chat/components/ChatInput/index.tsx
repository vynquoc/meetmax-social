import './style.scss';
import { GrAttachment } from 'react-icons/gr';
import { MdTagFaces } from 'react-icons/md';
import { BiSend } from 'react-icons/bi';
interface ChatInputProps {
  content: string;
  onContentChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmitChat: () => {};
}
const ChatInput = ({ content, onContentChange, onSubmitChat }: ChatInputProps) => {
  return (
    <div className="chat-input-container">
      <div className="chat-input">
        <input onChange={onContentChange} value={content} />
        <div className="chat-input-icon">
          <GrAttachment />
          <MdTagFaces />
        </div>
      </div>
      <div className="send-button" onClick={onSubmitChat}>
        <BiSend className="send-button-inner" />
      </div>
    </div>
  );
};

export default ChatInput;
