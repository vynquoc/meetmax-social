import { useEffect, useState } from 'react';
import './style.scss';
import messageApi from '../../../../api/messageApi';

import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../../store/store';
import { updateLastMessage } from '../../../../store/actions/conversationActions';
import {
  ConversationType,
  MessageType,
} from '../../../../store/actionTypes/conversationActionTypes';

import { AiOutlinePhone, AiOutlineVideoCamera, AiOutlineExclamationCircle } from 'react-icons/ai';
import AvatarIcon from '../../../../components/AvatarIcon';
import ChatInput from '../ChatInput';
import MessageList from '../MessageList';

interface ChatContainerProps {
  currentConversation: ConversationType;
}

const ChatContainer = ({ currentConversation }: ChatContainerProps) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state: RootStore) => state.user.currentUser);
  const socket = useSelector((state: RootStore) => state.socket.socket);

  const [messages, setMessages] = useState<MessageType[]>([]);
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
        const { newMessage }: any = await messageApi.create({
          conversationId: currentConversation.id,
          content,
        });
        const recipient = currentConversation?.members.find(
          (member: any) => member.id !== newMessage.sender.id
        );
        setMessages([...messages, newMessage]);
        socket.emit('send-message', { newMessage, recipient });
        setContent('');
        dispatch<any>(updateLastMessage(newMessage));
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
