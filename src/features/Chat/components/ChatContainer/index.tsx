import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import messageApi from '../../../../api/messageApi';
import { ConversationContext } from '../../../../contexts/ConversationContext/ConversationContext';

import { AiOutlinePhone, AiOutlineVideoCamera, AiOutlineExclamationCircle } from 'react-icons/ai';

import AvatarIcon from '../../../../components/AvatarIcon';
import ChatInput from '../ChatInput';

import MessageList from '../MessageList';
import './style.scss';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../store/store';

const ChatContainer = () => {
  const { conversationList, dispatch } = useContext(ConversationContext);
  const [searchParams] = useSearchParams({});
  const conversationId: any = searchParams.get('conversationId');

  const currentConversation = useMemo(
    () => conversationList.find((con: any) => con.id === conversationId),
    [conversationId, conversationList]
  );

  const currentUser = useSelector((state: RootStore) => state.user.currentUser);
  const socket = useSelector((state: RootStore) => state.socket.socket);
  const [messages, setMessages] = useState<any[]>([]);
  const [content, setContent] = useState('');
  const [friend, setFriend] = useState<any>(null);

  const getMessagesOfConversation = async () => {
    try {
      const { messages }: any = await messageApi.getMessages(conversationId);
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
          conversationId: conversationId,
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
  }, [conversationId, conversationList]);

  useEffect(() => {
    getMessagesOfConversation();
  }, [conversationId]);

  useEffect(() => {
    socket.on('receive-message', (message: any) => {
      // console.log('Before', message.conversation, conversationId);
      if (message.conversation === conversationId) {
        console.log('After', message.conversation, conversationId);
        setMessages([...messages, message]);
      }
      dispatch({ type: 'UPDATE_LAST_MESSAGE', payload: { message } });
    });
  });

  return (
    <>
      {conversationId && (
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
