import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import notificationApi from '../../api/notificationApi';
import { SocketContext } from '../SocketContext';
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
  const { socket } = useContext(SocketContext);
  const getNotificationList = async () => {
    const { notificationList }: any = await notificationApi.getNotificationList();
    dispatch({ type: 'GET_NOTIFICATION_LIST', payload: { notificationList } });
  };

  useEffect(() => {
    getNotificationList();
    socket.on('push-notification', (notification: any) => {
      dispatch({ type: 'UPDATE_NOTIFICATION_LIST', payload: { newNotification: notification } });
    });
  }, []);

  const value = { notificationList: state, dispatch };
  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
