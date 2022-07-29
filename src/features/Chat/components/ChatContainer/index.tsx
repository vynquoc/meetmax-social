import { useContext, useEffect, useRef, useState } from 'react';
import messageApi from '../../../../api/messageApi';
import { ConversationContext } from '../../../../contexts/ConversationContext/ConversationContext';
import { SocketContext } from '../../../../contexts/SocketContext';
import { AuthContext } from '../../../../contexts/AuthContext';
import { AiOutlinePhone, AiOutlineVideoCamera, AiOutlineExclamationCircle } from 'react-icons/ai';

import AvatarIcon from '../../../../components/AvatarIcon';
import ChatInput from '../ChatInput';

import MessageList from '../MessageList';
import './style.scss';

const ChatContainer = () => {
  const { currentConversation, dispatch } = useContext(ConversationContext);

  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const [messages, setMessages] = useState<any[]>([]);
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
        const recipient = currentConversation.members.find(
          (member: any) => member.id !== newMessage.sender.id
        );
        setMessages([...messages, newMessage]);
        socket.emit('send-message', { newMessage, recipient });
        setContent('');
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
    currentConversation && getMessagesOfConversation();
  }, [currentConversation]);

  useEffect(() => {
    socket.on('receive-message', (message: any) => {
      if (message.conversation === currentConversation?.id) {
        setMessages([...messages, message]);
        // dispatch({
        //   type: 'UPDATE_CONVERSATION',
        //   payload: { updatedConversation: { ...currentConversation, lastMessage: message } },
        // });
      } else {
        dispatch({
          type: 'UPDATE_LAST_MESSAGE',
          payload: {
            message,
          },
        });
      }
    });
  });

  return (
    <>
      {currentConversation && (
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
          <hr />
          <MessageList messages={messages} />
          <ChatInput
            onContentChange={handleContentMessageChange}
            onSubmitChat={handleSubmitChat}
            content={content}
          />
        </div>
      )}
    </>
  );
};

export default ChatContainer;
