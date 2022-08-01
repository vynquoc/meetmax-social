import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../store/store';

import './style.scss';

import Message from '../Message';

const MessageList = ({ messages }: any) => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const currentUser = useSelector((state: RootStore) => state.user.currentUser);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="message-list">
      {messages.map((message: any) => {
        return message.sender.id === currentUser?.id ? (
          <Message right message={message} key={message._id} />
        ) : (
          <Message left message={message} key={message._id} />
        );
      })}
      <div ref={messageEndRef} />
    </div>
  );
};

export default MessageList;
