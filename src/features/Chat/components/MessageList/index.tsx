import React, { useRef, useContext, useEffect } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import './style.scss';

import Message from '../Message';

const MessageList = ({ messages }: any) => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { currentUser } = useContext(AuthContext);
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
