import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import notificationApi from '../../api/notificationApi';
import { RootStore } from '../../store/store';
import { AuthContext } from '../AuthContext';

import { notificationReducer } from './reducers';

interface NotificationProviderProps {
  children: ReactNode;
}

const DefaultData = {
  notifications: [],
  dispatch: () => null,
};

export const NotificationContext = createContext<any>(DefaultData);

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [state, dispatch] = useReducer(notificationReducer, DefaultData.notifications);
  const { currentUser } = useContext(AuthContext);
  const socket = useSelector((state: RootStore) => state.socket.socket);

  const getNotificationList = async () => {
    const { notificationList }: any = await notificationApi.getNotificationList();
    dispatch({ type: 'GET_NOTIFICATION_LIST', payload: { notificationList } });
  };

  useEffect(() => {
    if (currentUser) {
      getNotificationList();

      socket.on('push-comment-notification', (notification: any) => {
        dispatch({ type: 'UPDATE_NOTIFICATION_LIST', payload: { newNotification: notification } });
      });

      socket.on('push-like-notification', (notification: any) => {
        dispatch({ type: 'UPDATE_NOTIFICATION_LIST', payload: { newNotification: notification } });
      });
    }
  }, [currentUser]);

  const value = { notificationList: state, dispatch };
  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
