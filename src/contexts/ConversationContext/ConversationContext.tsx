import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import conversationApi from '../../api/conversationApi';
import { AuthContext } from '../AuthContext';
import { conversationReducer } from './reducers';

interface ConversationProviderProps {
  children: ReactNode;
}

const DefaultData = {
  conversationList: [],
  currentConversation: null,
  dispatch: () => null,
};

export const ConversationContext = createContext<any>(DefaultData);

export const ConversationProvider = ({ children }: ConversationProviderProps) => {
  const [state, dispatch] = useReducer(conversationReducer, DefaultData);
  const { currentUser } = useContext(AuthContext);

  const getConversationList = async () => {
    const { conversations }: any = await conversationApi.getConversations();
    dispatch({ type: 'GET_CONVERSATION_LIST', payload: { conversationList: conversations } });
  };

  useEffect(() => {
    getConversationList();
  }, [currentUser]);
  const { conversationList, currentConversation } = state;
  const value = { conversationList, currentConversation, dispatch };
  return <ConversationContext.Provider value={value}>{children}</ConversationContext.Provider>;
};
