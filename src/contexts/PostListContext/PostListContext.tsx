import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import postApi from '../../api/postApi';
import { AuthContext } from '../AuthContext';
import { SocketContext } from '../SocketContext';
import { postListReducer } from './reducers';

interface PostListProviderProps {
  children: ReactNode;
}

const DefaultData = {
  postList: [],
  dispatch: () => null,
};

export const PostListContext = createContext<any>(DefaultData);

export const PostListProvider = ({ children }: PostListProviderProps) => {
  const [state, dispatch] = useReducer(postListReducer, DefaultData.postList);

  const value = { postList: state, dispatch };
  return <PostListContext.Provider value={value}>{children}</PostListContext.Provider>;
};
