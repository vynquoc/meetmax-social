import { useContext, useEffect, useState } from 'react';
import { ConversationContext } from '../../../../contexts/ConversationContext/ConversationContext';
import { AuthContext } from '../../../../contexts/AuthContext';
import { AiOutlinePhone, AiOutlineVideoCamera, AiOutlineExclamationCircle } from 'react-icons/ai';
import AvatarIcon from '../../../../components/AvatarIcon';
import ChatInput from '../ChatInput';

import './style.scss';
import messageApi from '../../../../api/messageApi';

const ChatContainer = () => {
  const { currentConversation, dispatch } = useContext(ConversationContext);
  const { currentUser } = useContext(AuthContext);

  const [messages, setMessages] = useState<any>([]);
  const [content, setContent] = useState('');
  const [friend, setFriend] = useState<any>(null);

  const getMessagesOfConversation = async () => {
    try {
      const { messages }: any = await messageApi.getMessages(currentConversation.id);
      setMessages(messages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContentMessageChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setContent(value);
  };

  const handleSubmitChat = async () => {
    if (content) {
      try {
        const { newMessage, updatedConversation }: any = await messageApi.create({
          conversationId: currentConversation.id,
          content,
        });
        setMessages([...messages, newMessage]);
        dispatch({ type: 'UPDATE_CONVERSATION', payload: { updatedConversation } });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const friend = currentConversation?.members.find((m: any) => m.id !== currentUser?.id);
    setFriend(friend);
  }, [currentConversation]);

  useEffect(() => {
    getMessagesOfConversation();
  }, [currentConversation]);

  return (
    <div className="chat-container">
      <div className="chat-container-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AvatarIcon avatarUrl={friend?.avatar} />
          <p>{friend?.firstName + ' ' + friend?.lastName}</p>
        </div>
        <div>
          <AiOutlinePhone />
          <AiOutlineVideoCamera />
          <AiOutlineExclamationCircle />
        </div>
      </div>
      <div className="message-list">
        {messages.map((message: any) => {
          return (
            <>
              <h1>{message.sender.username}</h1>
              <p>{message.content}</p>
            </>
          );
        })}
      </div>
      <hr />
      <ChatInput
        onContentChange={handleContentMessageChange}
        onSubmitChat={handleSubmitChat}
        content={content}
      />
    </div>
  );
};

export default ChatContainer;
