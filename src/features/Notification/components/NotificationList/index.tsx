import React, { useContext, useEffect } from 'react';
import './style.scss';
import { NotificationContext } from '../../../../contexts/NotificationContext/NotificationContext';
import { SocketContext } from '../../../../contexts/SocketContext';
import Notification from '../Notification';
const NotificationList = () => {
  const { socket } = useContext(SocketContext);
  const { notificationList, dispatch } = useContext(NotificationContext);

  return (
    <div>
      <hr />
      {notificationList.map((notification: any) => {
        return <Notification key={notification.id} notification={notification} />;
      })}
    </div>
  );
};

export default NotificationList;
