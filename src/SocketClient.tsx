import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateLastMessage } from './store/actions/conversationActions';
import { addNotification } from './store/actions/notificationActions';
import { NotificationType } from './store/actionTypes/notificationActionTypes';
import { RootStore } from './store/store';

const SocketClient = () => {
  const socket = useSelector((state: RootStore) => state.socket.socket);
  const dispatch = useDispatch();

  //NOTIFICATIONS
  useEffect(() => {
    socket.on('push-comment-notification', (notification: NotificationType) => {
      dispatch<any>(addNotification(notification));
    });
    socket.on('push-like-notification', (notification: NotificationType) => {
      dispatch<any>(addNotification(notification));
    });
    return () => {
      socket.off('push-comment-notification');
    };
  }, [socket, dispatch]);

  useEffect(() => {
    socket.on('receive-message', (message: any) => {
      dispatch<any>(updateLastMessage(message));
    });
  }, [socket]);

  return <></>;
};

export default SocketClient;
