import React from 'react';
import './style.scss';
import AvatarIcon from '../../../../components/AvatarIcon';
import TextInput from '../../../../components/TextInput';
import { BiSend } from 'react-icons/bi';
interface CommentInputProps {
  content: string;
  onContentChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmitComment: () => {};
}

const CommentInput = ({ content, onContentChange, onSubmitComment }: CommentInputProps) => {
  return (
    <div className="comment-input">
      <AvatarIcon />
      <TextInput
        type="text"
        placeholder="Write comment"
        name="comment"
        onChange={(e) => onContentChange(e)}
        value={content}
      />
      <div className="submit-button" onClick={onSubmitComment}>
        <BiSend className="submit-button-inner" />
      </div>
    </div>
  );
};

export default CommentInput;
