import './style.scss';

import Notification from '../Notification';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../store/store';
import { NotificationType } from '../../../../store/actionTypes/notificationActionTypes';

const NotificationList = () => {
  const notificationList = useSelector((state: RootStore) => state.notifications.notificationList);
  return (
    <div>
      <hr />
      {notificationList.map((notification: NotificationType) => {
        return <Notification key={notification.id} notification={notification} />;
      })}
    </div>
  );
};

export default NotificationList;
