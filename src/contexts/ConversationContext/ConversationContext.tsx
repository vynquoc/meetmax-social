import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { useSearchParams } from 'react-router-dom';
import conversationApi from '../../api/conversationApi';
import { AuthContext } from '../AuthContext';
import { conversationReducer } from './reducers';

interface ConversationProviderProps {
  children: ReactNode;
}

const DefaultData = {
  conversationList: [],

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

  const { conversationList } = state;
  const value = { conversationList, dispatch };
  return <ConversationContext.Provider value={value}>{children}</ConversationContext.Provider>;
};
