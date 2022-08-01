import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNotification } from './store/actions/notificationActions';
import { NotificationType } from './store/actionTypes/notificationActionTypes';
import { RootStore } from './store/store';

const SocketClient = () => {
  const socket = useSelector((state: RootStore) => state.socket.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('push-comment-notification', (notification: NotificationType) => {
      console.log(notification);
      dispatch<any>(addNotification(notification));
    });

    //   socket.on('push-like-notification', (notification: any) => {
    //     dispatch({ type: 'UPDATE_NOTIFICATION_LIST', payload: { newNotification: notification } });
    //   });
    return () => {
      socket.off('push-comment-notification');
    };
  }, [socket, dispatch]);
  return <></>;
};

export default SocketClient;
